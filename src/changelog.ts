import { getGitDiff, parseCommits, generateMarkDown, loadChangelogConfig } from 'changelogen'

export async function generateChangelog(
    cwd: string,
    from: string | undefined,
    newVersion: string,
    ignoreContributors: boolean
) {
    const config = await loadChangelogConfig(cwd, {
        from,
        newVersion
    })

    const rawCommits = await getGitDiff(config.from, config.to)

    console.log('From:', config.from, 'To:', config.to, 'Raw commits:', rawCommits)

    // Parse commits as conventional commits
    const commits = parseCommits(rawCommits, config).filter(
        (c) => config.types[c.type] && !(c.type === 'chore' && c.scope === 'deps' && !c.isBreaking)
    )

    if (ignoreContributors)
        commits.forEach((c) => {
            // @ts-expect-error allow to hide author
            delete c.author
        })

    // Ignore release commit
    if (commits[0]?.message.includes(newVersion.replace(/^v/, ''))) commits.shift()

    console.log('Parsed commits:', commits)

    // Generate markdown
    const markdown = await generateMarkDown(commits, config)

    return markdown
}
