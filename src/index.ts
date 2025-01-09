import * as core from '@actions/core'
import { context, getOctokit } from '@actions/github'
import { generateChangelog } from './changelog.js'

try {
    // Get authenticated GitHub client (Ocktokit): https://github.com/actions/toolkit/tree/master/packages/github#usage
    const github = getOctokit(process.env.GITHUB_TOKEN!)

    // Get owner and repo from context of payload that triggered the action
    const { owner, repo } = context.repo

    // Get the inputs from the workflow file: https://github.com/actions/toolkit/tree/master/packages/core#inputsoutputs
    const tagName = core.getInput('tag_name', { required: true })

    // This removes the 'refs/tags' portion of the string, i.e. from 'refs/tags/v1.10.15' to 'v1.10.15'
    const tag = tagName.replace('refs/tags/', '')
    const releaseName = core.getInput('release_name', { required: false }) || tag

    const releases = await github.rest.repos.listReleases({
        owner,
        repo,
        per_page: 1
    })
    const previousTag = releases.data[0]?.tag_name as string | undefined

    console.log(`${previousTag} => ${tag}`)

    const ignoreContributors = core.getInput('no_contributors', { required: false }) === 'true'
    let body = await generateChangelog(process.cwd(), previousTag, tag.replace(/^v/, ''), ignoreContributors)

    let lines = body.split('\n')
    // Cleanup output
    const tagFilter = tag.replace('v', '')
    lines = lines.filter((line) => !line.includes(tagFilter))
    body = lines.join('\n').trim()
    console.log('Changelog body:')
    console.log(body)
    const draft = core.getInput('draft', { required: false }) === 'true'
    const prerelease = /\d\.\d\.\d-/.test(tag)

    // Create a release
    // API Documentation: https://developer.github.com/v3/repos/releases/#create-a-release
    // Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-create-release
    await github.rest.repos.createRelease({
        owner,
        repo,
        tag_name: tag,
        name: releaseName,
        body,
        draft,
        prerelease
    })

} catch (error: any) {
    core.setFailed(error.message)
}
