export const getSecret = () => "secret";

export const PR_HOOK_HEADER_1 = {
    "Request method": "POST",
    "Accept": "*/*",
    "Content-Type": "application/json",
    "User-Agent": "GitHub-Hookshot/7fd3372",
    "X-GitHub-Delivery": "07944fb0-e49e-11ee-80ee-51ea6a97ca1b",
    "X-GitHub-Event": "pull_request",
    "X-GitHub-Hook-ID": 467130467,
    "X-GitHub-Hook-Installation-Target-ID": 772074151,
    "X-GitHub-Hook-Installation-Target-Type": "repository",
    "X-Hub-Signature": "sha1=489b9e3e91a821a27f8e2b7fa87d408d482f200b",
    "X-Hub-Signature-256": "sha256=8f4c79cbf9574087e8a0e3b55561b24fd9d0d319213b19f001491d6e178fbf9e"
} as const;

export const PR_HOOK_OPENED_1 = {
    action: "opened",
    number: 7,
    pull_request: {
        url: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7",
        id: 1776199601,
        node_id: "PR_kwDOLgTqp85p3qex",
        html_url: "https://github.com/Slachub/slachub-testing/pull/7",
        diff_url: "https://github.com/Slachub/slachub-testing/pull/7.diff",
        patch_url: "https://github.com/Slachub/slachub-testing/pull/7.patch",
        issue_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
        number: 7,
        state: "open",
        locked: false,
        title: "Update README.md",
        user: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        body: null,
        created_at: "2024-03-17T20:36:26Z",
        updated_at: "2024-03-17T20:36:27Z",
        closed_at: null,
        merged_at: null,
        merge_commit_sha: null,
        assignee: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        assignees: [
            {
                login: "vmatekole",
                id: 424339,
                node_id: "MDQ6VXNlcjQyNDMzOQ==",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/424339?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/vmatekole",
                html_url: "https://github.com/vmatekole",
                followers_url:
                    "https://api.github.com/users/vmatekole/followers",
                following_url:
                    "https://api.github.com/users/vmatekole/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/vmatekole/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/vmatekole/subscriptions",
                organizations_url:
                    "https://api.github.com/users/vmatekole/orgs",
                repos_url: "https://api.github.com/users/vmatekole/repos",
                events_url:
                    "https://api.github.com/users/vmatekole/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/vmatekole/received_events",
                type: "User",
                site_admin: false,
            },
        ],
        requested_reviewers: [
            {
                login: "thugsb",
                id: 86087,
                node_id: "MDQ6VXNlcjg2MDg3",
                avatar_url: "https://avatars.githubusercontent.com/u/86087?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/thugsb",
                html_url: "https://github.com/thugsb",
                followers_url: "https://api.github.com/users/thugsb/followers",
                following_url:
                    "https://api.github.com/users/thugsb/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/thugsb/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/thugsb/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/thugsb/subscriptions",
                organizations_url: "https://api.github.com/users/thugsb/orgs",
                repos_url: "https://api.github.com/users/thugsb/repos",
                events_url:
                    "https://api.github.com/users/thugsb/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/thugsb/received_events",
                type: "User",
                site_admin: false,
            },
            {
                login: "sairamya93",
                id: 123948635,
                node_id: "U_kgDOB2NOWw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/123948635?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/sairamya93",
                html_url: "https://github.com/sairamya93",
                followers_url:
                    "https://api.github.com/users/sairamya93/followers",
                following_url:
                    "https://api.github.com/users/sairamya93/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/sairamya93/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/sairamya93/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/sairamya93/subscriptions",
                organizations_url:
                    "https://api.github.com/users/sairamya93/orgs",
                repos_url: "https://api.github.com/users/sairamya93/repos",
                events_url:
                    "https://api.github.com/users/sairamya93/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/sairamya93/received_events",
                type: "User",
                site_admin: false,
            },
        ],
        requested_teams: [],
        labels: [],
        milestone: null,
        draft: false,
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/commits",
        review_comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/comments",
        review_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/comments",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/994111d1af4ecc721d377db6741b4d2e2493b52b",
        head: {
            label: "tr-vm:main",
            ref: "main",
            sha: "994111d1af4ecc721d377db6741b4d2e2493b52b",
            user: {
                login: "tr-vm",
                id: 157957783,
                node_id: "O_kgDOCWo-lw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/157957783?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/tr-vm",
                html_url: "https://github.com/tr-vm",
                followers_url: "https://api.github.com/users/tr-vm/followers",
                following_url:
                    "https://api.github.com/users/tr-vm/following{/other_user}",
                gists_url: "https://api.github.com/users/tr-vm/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/tr-vm/subscriptions",
                organizations_url: "https://api.github.com/users/tr-vm/orgs",
                repos_url: "https://api.github.com/users/tr-vm/repos",
                events_url:
                    "https://api.github.com/users/tr-vm/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/tr-vm/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 773387629,
                node_id: "R_kgDOLhj1bQ",
                name: "slachub-testing",
                full_name: "tr-vm/slachub-testing",
                private: false,
                owner: {
                    login: "tr-vm",
                    id: 157957783,
                    node_id: "O_kgDOCWo-lw",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/157957783?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/tr-vm",
                    html_url: "https://github.com/tr-vm",
                    followers_url:
                        "https://api.github.com/users/tr-vm/followers",
                    following_url:
                        "https://api.github.com/users/tr-vm/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/tr-vm/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/tr-vm/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/tr-vm/orgs",
                    repos_url: "https://api.github.com/users/tr-vm/repos",
                    events_url:
                        "https://api.github.com/users/tr-vm/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/tr-vm/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/tr-vm/slachub-testing",
                description: null,
                fork: true,
                url: "https://api.github.com/repos/tr-vm/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/deployments",
                created_at: "2024-03-17T14:29:39Z",
                updated_at: "2024-03-17T14:29:39Z",
                pushed_at: "2024-03-17T20:35:56Z",
                git_url: "git://github.com/tr-vm/slachub-testing.git",
                ssh_url: "git@github.com:tr-vm/slachub-testing.git",
                clone_url: "https://github.com/tr-vm/slachub-testing.git",
                svn_url: "https://github.com/tr-vm/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: false,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 0,
                open_issues: 0,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        base: {
            label: "Slachub:main",
            ref: "main",
            sha: "a881642bbeb0257d57a35b20171623d656161ece",
            user: {
                login: "Slachub",
                id: 163655420,
                node_id: "O_kgDOCcEu_A",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/163655420?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/Slachub",
                html_url: "https://github.com/Slachub",
                followers_url: "https://api.github.com/users/Slachub/followers",
                following_url:
                    "https://api.github.com/users/Slachub/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/Slachub/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/Slachub/subscriptions",
                organizations_url: "https://api.github.com/users/Slachub/orgs",
                repos_url: "https://api.github.com/users/Slachub/repos",
                events_url:
                    "https://api.github.com/users/Slachub/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/Slachub/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 772074151,
                node_id: "R_kgDOLgTqpw",
                name: "slachub-testing",
                full_name: "Slachub/slachub-testing",
                private: false,
                owner: {
                    login: "Slachub",
                    id: 163655420,
                    node_id: "O_kgDOCcEu_A",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/163655420?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/Slachub",
                    html_url: "https://github.com/Slachub",
                    followers_url:
                        "https://api.github.com/users/Slachub/followers",
                    following_url:
                        "https://api.github.com/users/Slachub/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/Slachub/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/Slachub/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/Slachub/orgs",
                    repos_url: "https://api.github.com/users/Slachub/repos",
                    events_url:
                        "https://api.github.com/users/Slachub/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/Slachub/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/Slachub/slachub-testing",
                description: null,
                fork: false,
                url: "https://api.github.com/repos/Slachub/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/deployments",
                created_at: "2024-03-14T13:41:29Z",
                updated_at: "2024-03-16T13:18:03Z",
                pushed_at: "2024-03-17T20:36:27Z",
                git_url: "git://github.com/Slachub/slachub-testing.git",
                ssh_url: "git@github.com:Slachub/slachub-testing.git",
                clone_url: "https://github.com/Slachub/slachub-testing.git",
                svn_url: "https://github.com/Slachub/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 1,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 5,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 1,
                open_issues: 5,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        _links: {
            self: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7",
            },
            html: {
                href: "https://github.com/Slachub/slachub-testing/pull/7",
            },
            issue: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
            },
            comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/7/comments",
            },
            review_comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/comments",
            },
            review_comment: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
            },
            commits: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/commits",
            },
            statuses: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/statuses/994111d1af4ecc721d377db6741b4d2e2493b52b",
            },
        },
        author_association: "COLLABORATOR",
        auto_merge: null,
        active_lock_reason: null,
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: "unknown",
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 1,
        deletions: 1,
        changed_files: 1,
    },
    repository: {
        id: 772074151,
        node_id: "R_kgDOLgTqpw",
        name: "slachub-testing",
        full_name: "Slachub/slachub-testing",
        private: false,
        owner: {
            login: "Slachub",
            id: 163655420,
            node_id: "O_kgDOCcEu_A",
            avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Slachub",
            html_url: "https://github.com/Slachub",
            followers_url: "https://api.github.com/users/Slachub/followers",
            following_url:
                "https://api.github.com/users/Slachub/following{/other_user}",
            gists_url: "https://api.github.com/users/Slachub/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/Slachub/subscriptions",
            organizations_url: "https://api.github.com/users/Slachub/orgs",
            repos_url: "https://api.github.com/users/Slachub/repos",
            events_url: "https://api.github.com/users/Slachub/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/Slachub/received_events",
            type: "Organization",
            site_admin: false,
        },
        html_url: "https://github.com/Slachub/slachub-testing",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Slachub/slachub-testing",
        forks_url: "https://api.github.com/repos/Slachub/slachub-testing/forks",
        keys_url:
            "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Slachub/slachub-testing/teams",
        hooks_url: "https://api.github.com/repos/Slachub/slachub-testing/hooks",
        issue_events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/events",
        assignees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
        tags_url: "https://api.github.com/repos/Slachub/slachub-testing/tags",
        blobs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/Slachub/slachub-testing/languages",
        stargazers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
        contributors_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contributors",
        subscribers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
        subscription_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscription",
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/Slachub/slachub-testing/merges",
        archive_url:
            "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/Slachub/slachub-testing/downloads",
        issues_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
        releases_url:
            "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/deployments",
        created_at: "2024-03-14T13:41:29Z",
        updated_at: "2024-03-16T13:18:03Z",
        pushed_at: "2024-03-17T20:36:27Z",
        git_url: "git://github.com/Slachub/slachub-testing.git",
        ssh_url: "git@github.com:Slachub/slachub-testing.git",
        clone_url: "https://github.com/Slachub/slachub-testing.git",
        svn_url: "https://github.com/Slachub/slachub-testing",
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 5,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1,
        open_issues: 5,
        watchers: 0,
        default_branch: "main",
        custom_properties: {},
    },
    organization: {
        login: "Slachub",
        id: 163655420,
        node_id: "O_kgDOCcEu_A",
        url: "https://api.github.com/orgs/Slachub",
        repos_url: "https://api.github.com/orgs/Slachub/repos",
        events_url: "https://api.github.com/orgs/Slachub/events",
        hooks_url: "https://api.github.com/orgs/Slachub/hooks",
        issues_url: "https://api.github.com/orgs/Slachub/issues",
        members_url: "https://api.github.com/orgs/Slachub/members{/member}",
        public_members_url:
            "https://api.github.com/orgs/Slachub/public_members{/member}",
        avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
        description: null,
    },
    sender: {
        login: "vmatekole",
        id: 424339,
        node_id: "MDQ6VXNlcjQyNDMzOQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vmatekole",
        html_url: "https://github.com/vmatekole",
        followers_url: "https://api.github.com/users/vmatekole/followers",
        following_url:
            "https://api.github.com/users/vmatekole/following{/other_user}",
        gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/vmatekole/subscriptions",
        organizations_url: "https://api.github.com/users/vmatekole/orgs",
        repos_url: "https://api.github.com/users/vmatekole/repos",
        events_url: "https://api.github.com/users/vmatekole/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/vmatekole/received_events",
        type: "User",
        site_admin: false,
    },
} as const;

export const PR_HOOK_CLOSED_1 = {
    action: "closed",
    number: 6,
    pull_request: {
        url: "https://api.github.com/repos/Slachub/slachub-testing/pulls/6",
        id: 1776074444,
        node_id: "PR_kwDOLgTqp85p3L7M",
        html_url: "https://github.com/Slachub/slachub-testing/pull/6",
        diff_url: "https://github.com/Slachub/slachub-testing/pull/6.diff",
        patch_url: "https://github.com/Slachub/slachub-testing/pull/6.patch",
        issue_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/6",
        number: 6,
        state: "closed",
        locked: false,
        title: "update readme",
        user: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        body: "Testing PRs",
        created_at: "2024-03-17T14:33:01Z",
        updated_at: "2024-03-17T20:34:51Z",
        closed_at: "2024-03-17T20:34:51Z",
        merged_at: "2024-03-17T20:34:51Z",
        merge_commit_sha: "a881642bbeb0257d57a35b20171623d656161ece",
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        draft: false,
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/6/commits",
        review_comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/6/comments",
        review_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/6/comments",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/c135275ad20259ee6e0debf5b40588e8e3cdcf4c",
        head: {
            label: "tr-vm:main",
            ref: "main",
            sha: "c135275ad20259ee6e0debf5b40588e8e3cdcf4c",
            user: {
                login: "tr-vm",
                id: 157957783,
                node_id: "O_kgDOCWo-lw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/157957783?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/tr-vm",
                html_url: "https://github.com/tr-vm",
                followers_url: "https://api.github.com/users/tr-vm/followers",
                following_url:
                    "https://api.github.com/users/tr-vm/following{/other_user}",
                gists_url: "https://api.github.com/users/tr-vm/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/tr-vm/subscriptions",
                organizations_url: "https://api.github.com/users/tr-vm/orgs",
                repos_url: "https://api.github.com/users/tr-vm/repos",
                events_url:
                    "https://api.github.com/users/tr-vm/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/tr-vm/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 773387629,
                node_id: "R_kgDOLhj1bQ",
                name: "slachub-testing",
                full_name: "tr-vm/slachub-testing",
                private: false,
                owner: {
                    login: "tr-vm",
                    id: 157957783,
                    node_id: "O_kgDOCWo-lw",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/157957783?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/tr-vm",
                    html_url: "https://github.com/tr-vm",
                    followers_url:
                        "https://api.github.com/users/tr-vm/followers",
                    following_url:
                        "https://api.github.com/users/tr-vm/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/tr-vm/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/tr-vm/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/tr-vm/orgs",
                    repos_url: "https://api.github.com/users/tr-vm/repos",
                    events_url:
                        "https://api.github.com/users/tr-vm/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/tr-vm/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/tr-vm/slachub-testing",
                description: null,
                fork: true,
                url: "https://api.github.com/repos/tr-vm/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/deployments",
                created_at: "2024-03-17T14:29:39Z",
                updated_at: "2024-03-17T14:29:39Z",
                pushed_at: "2024-03-17T14:32:09Z",
                git_url: "git://github.com/tr-vm/slachub-testing.git",
                ssh_url: "git@github.com:tr-vm/slachub-testing.git",
                clone_url: "https://github.com/tr-vm/slachub-testing.git",
                svn_url: "https://github.com/tr-vm/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: false,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 0,
                open_issues: 0,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        base: {
            label: "Slachub:main",
            ref: "main",
            sha: "066c2298ee6d8032377266d73c9c716a855e8888",
            user: {
                login: "Slachub",
                id: 163655420,
                node_id: "O_kgDOCcEu_A",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/163655420?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/Slachub",
                html_url: "https://github.com/Slachub",
                followers_url: "https://api.github.com/users/Slachub/followers",
                following_url:
                    "https://api.github.com/users/Slachub/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/Slachub/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/Slachub/subscriptions",
                organizations_url: "https://api.github.com/users/Slachub/orgs",
                repos_url: "https://api.github.com/users/Slachub/repos",
                events_url:
                    "https://api.github.com/users/Slachub/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/Slachub/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 772074151,
                node_id: "R_kgDOLgTqpw",
                name: "slachub-testing",
                full_name: "Slachub/slachub-testing",
                private: false,
                owner: {
                    login: "Slachub",
                    id: 163655420,
                    node_id: "O_kgDOCcEu_A",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/163655420?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/Slachub",
                    html_url: "https://github.com/Slachub",
                    followers_url:
                        "https://api.github.com/users/Slachub/followers",
                    following_url:
                        "https://api.github.com/users/Slachub/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/Slachub/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/Slachub/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/Slachub/orgs",
                    repos_url: "https://api.github.com/users/Slachub/repos",
                    events_url:
                        "https://api.github.com/users/Slachub/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/Slachub/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/Slachub/slachub-testing",
                description: null,
                fork: false,
                url: "https://api.github.com/repos/Slachub/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/deployments",
                created_at: "2024-03-14T13:41:29Z",
                updated_at: "2024-03-16T13:18:03Z",
                pushed_at: "2024-03-17T20:34:51Z",
                git_url: "git://github.com/Slachub/slachub-testing.git",
                ssh_url: "git@github.com:Slachub/slachub-testing.git",
                clone_url: "https://github.com/Slachub/slachub-testing.git",
                svn_url: "https://github.com/Slachub/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 1,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 4,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 1,
                open_issues: 4,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        _links: {
            self: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/6",
            },
            html: {
                href: "https://github.com/Slachub/slachub-testing/pull/6",
            },
            issue: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/6",
            },
            comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/6/comments",
            },
            review_comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/6/comments",
            },
            review_comment: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
            },
            commits: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/6/commits",
            },
            statuses: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/statuses/c135275ad20259ee6e0debf5b40588e8e3cdcf4c",
            },
        },
        author_association: "COLLABORATOR",
        auto_merge: null,
        active_lock_reason: null,
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: "unknown",
        merged_by: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 1,
        deletions: 1,
        changed_files: 1,
    },
    repository: {
        id: 772074151,
        node_id: "R_kgDOLgTqpw",
        name: "slachub-testing",
        full_name: "Slachub/slachub-testing",
        private: false,
        owner: {
            login: "Slachub",
            id: 163655420,
            node_id: "O_kgDOCcEu_A",
            avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Slachub",
            html_url: "https://github.com/Slachub",
            followers_url: "https://api.github.com/users/Slachub/followers",
            following_url:
                "https://api.github.com/users/Slachub/following{/other_user}",
            gists_url: "https://api.github.com/users/Slachub/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/Slachub/subscriptions",
            organizations_url: "https://api.github.com/users/Slachub/orgs",
            repos_url: "https://api.github.com/users/Slachub/repos",
            events_url: "https://api.github.com/users/Slachub/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/Slachub/received_events",
            type: "Organization",
            site_admin: false,
        },
        html_url: "https://github.com/Slachub/slachub-testing",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Slachub/slachub-testing",
        forks_url: "https://api.github.com/repos/Slachub/slachub-testing/forks",
        keys_url:
            "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Slachub/slachub-testing/teams",
        hooks_url: "https://api.github.com/repos/Slachub/slachub-testing/hooks",
        issue_events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/events",
        assignees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
        tags_url: "https://api.github.com/repos/Slachub/slachub-testing/tags",
        blobs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/Slachub/slachub-testing/languages",
        stargazers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
        contributors_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contributors",
        subscribers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
        subscription_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscription",
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/Slachub/slachub-testing/merges",
        archive_url:
            "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/Slachub/slachub-testing/downloads",
        issues_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
        releases_url:
            "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/deployments",
        created_at: "2024-03-14T13:41:29Z",
        updated_at: "2024-03-16T13:18:03Z",
        pushed_at: "2024-03-17T20:34:51Z",
        git_url: "git://github.com/Slachub/slachub-testing.git",
        ssh_url: "git@github.com:Slachub/slachub-testing.git",
        clone_url: "https://github.com/Slachub/slachub-testing.git",
        svn_url: "https://github.com/Slachub/slachub-testing",
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 4,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1,
        open_issues: 4,
        watchers: 0,
        default_branch: "main",
        custom_properties: {},
    },
    organization: {
        login: "Slachub",
        id: 163655420,
        node_id: "O_kgDOCcEu_A",
        url: "https://api.github.com/orgs/Slachub",
        repos_url: "https://api.github.com/orgs/Slachub/repos",
        events_url: "https://api.github.com/orgs/Slachub/events",
        hooks_url: "https://api.github.com/orgs/Slachub/hooks",
        issues_url: "https://api.github.com/orgs/Slachub/issues",
        members_url: "https://api.github.com/orgs/Slachub/members{/member}",
        public_members_url:
            "https://api.github.com/orgs/Slachub/public_members{/member}",
        avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
        description: null,
    },
    sender: {
        login: "vmatekole",
        id: 424339,
        node_id: "MDQ6VXNlcjQyNDMzOQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vmatekole",
        html_url: "https://github.com/vmatekole",
        followers_url: "https://api.github.com/users/vmatekole/followers",
        following_url:
            "https://api.github.com/users/vmatekole/following{/other_user}",
        gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/vmatekole/subscriptions",
        organizations_url: "https://api.github.com/users/vmatekole/orgs",
        repos_url: "https://api.github.com/users/vmatekole/repos",
        events_url: "https://api.github.com/users/vmatekole/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/vmatekole/received_events",
        type: "User",
        site_admin: false,
    },
};

export const PR_HOOK_REVIEW_1 = {
    action: "review_requested",
    number: 7,
    pull_request: {
        url: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7",
        id: 1776199601,
        node_id: "PR_kwDOLgTqp85p3qex",
        html_url: "https://github.com/Slachub/slachub-testing/pull/7",
        diff_url: "https://github.com/Slachub/slachub-testing/pull/7.diff",
        patch_url: "https://github.com/Slachub/slachub-testing/pull/7.patch",
        issue_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
        number: 7,
        state: "open",
        locked: false,
        title: "Update README.md",
        user: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        body: null,
        created_at: "2024-03-17T20:36:26Z",
        updated_at: "2024-03-17T20:36:27Z",
        closed_at: null,
        merged_at: null,
        merge_commit_sha: null,
        assignee: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        assignees: [
            {
                login: "vmatekole",
                id: 424339,
                node_id: "MDQ6VXNlcjQyNDMzOQ==",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/424339?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/vmatekole",
                html_url: "https://github.com/vmatekole",
                followers_url:
                    "https://api.github.com/users/vmatekole/followers",
                following_url:
                    "https://api.github.com/users/vmatekole/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/vmatekole/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/vmatekole/subscriptions",
                organizations_url:
                    "https://api.github.com/users/vmatekole/orgs",
                repos_url: "https://api.github.com/users/vmatekole/repos",
                events_url:
                    "https://api.github.com/users/vmatekole/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/vmatekole/received_events",
                type: "User",
                site_admin: false,
            },
        ],
        requested_reviewers: [
            {
                login: "thugsb",
                id: 86087,
                node_id: "MDQ6VXNlcjg2MDg3",
                avatar_url: "https://avatars.githubusercontent.com/u/86087?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/thugsb",
                html_url: "https://github.com/thugsb",
                followers_url: "https://api.github.com/users/thugsb/followers",
                following_url:
                    "https://api.github.com/users/thugsb/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/thugsb/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/thugsb/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/thugsb/subscriptions",
                organizations_url: "https://api.github.com/users/thugsb/orgs",
                repos_url: "https://api.github.com/users/thugsb/repos",
                events_url:
                    "https://api.github.com/users/thugsb/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/thugsb/received_events",
                type: "User",
                site_admin: false,
            },
            {
                login: "sairamya93",
                id: 123948635,
                node_id: "U_kgDOB2NOWw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/123948635?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/sairamya93",
                html_url: "https://github.com/sairamya93",
                followers_url:
                    "https://api.github.com/users/sairamya93/followers",
                following_url:
                    "https://api.github.com/users/sairamya93/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/sairamya93/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/sairamya93/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/sairamya93/subscriptions",
                organizations_url:
                    "https://api.github.com/users/sairamya93/orgs",
                repos_url: "https://api.github.com/users/sairamya93/repos",
                events_url:
                    "https://api.github.com/users/sairamya93/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/sairamya93/received_events",
                type: "User",
                site_admin: false,
            },
        ],
        requested_teams: [],
        labels: [],
        milestone: null,
        draft: false,
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/commits",
        review_comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/comments",
        review_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/comments",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/994111d1af4ecc721d377db6741b4d2e2493b52b",
        head: {
            label: "tr-vm:main",
            ref: "main",
            sha: "994111d1af4ecc721d377db6741b4d2e2493b52b",
            user: {
                login: "tr-vm",
                id: 157957783,
                node_id: "O_kgDOCWo-lw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/157957783?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/tr-vm",
                html_url: "https://github.com/tr-vm",
                followers_url: "https://api.github.com/users/tr-vm/followers",
                following_url:
                    "https://api.github.com/users/tr-vm/following{/other_user}",
                gists_url: "https://api.github.com/users/tr-vm/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/tr-vm/subscriptions",
                organizations_url: "https://api.github.com/users/tr-vm/orgs",
                repos_url: "https://api.github.com/users/tr-vm/repos",
                events_url:
                    "https://api.github.com/users/tr-vm/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/tr-vm/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 773387629,
                node_id: "R_kgDOLhj1bQ",
                name: "slachub-testing",
                full_name: "tr-vm/slachub-testing",
                private: false,
                owner: {
                    login: "tr-vm",
                    id: 157957783,
                    node_id: "O_kgDOCWo-lw",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/157957783?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/tr-vm",
                    html_url: "https://github.com/tr-vm",
                    followers_url:
                        "https://api.github.com/users/tr-vm/followers",
                    following_url:
                        "https://api.github.com/users/tr-vm/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/tr-vm/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/tr-vm/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/tr-vm/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/tr-vm/orgs",
                    repos_url: "https://api.github.com/users/tr-vm/repos",
                    events_url:
                        "https://api.github.com/users/tr-vm/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/tr-vm/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/tr-vm/slachub-testing",
                description: null,
                fork: true,
                url: "https://api.github.com/repos/tr-vm/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/tr-vm/slachub-testing/deployments",
                created_at: "2024-03-17T14:29:39Z",
                updated_at: "2024-03-17T14:29:39Z",
                pushed_at: "2024-03-17T20:35:56Z",
                git_url: "git://github.com/tr-vm/slachub-testing.git",
                ssh_url: "git@github.com:tr-vm/slachub-testing.git",
                clone_url: "https://github.com/tr-vm/slachub-testing.git",
                svn_url: "https://github.com/tr-vm/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: false,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 0,
                open_issues: 0,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        base: {
            label: "Slachub:main",
            ref: "main",
            sha: "a881642bbeb0257d57a35b20171623d656161ece",
            user: {
                login: "Slachub",
                id: 163655420,
                node_id: "O_kgDOCcEu_A",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/163655420?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/Slachub",
                html_url: "https://github.com/Slachub",
                followers_url: "https://api.github.com/users/Slachub/followers",
                following_url:
                    "https://api.github.com/users/Slachub/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/Slachub/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/Slachub/subscriptions",
                organizations_url: "https://api.github.com/users/Slachub/orgs",
                repos_url: "https://api.github.com/users/Slachub/repos",
                events_url:
                    "https://api.github.com/users/Slachub/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/Slachub/received_events",
                type: "Organization",
                site_admin: false,
            },
            repo: {
                id: 772074151,
                node_id: "R_kgDOLgTqpw",
                name: "slachub-testing",
                full_name: "Slachub/slachub-testing",
                private: false,
                owner: {
                    login: "Slachub",
                    id: 163655420,
                    node_id: "O_kgDOCcEu_A",
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/163655420?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/Slachub",
                    html_url: "https://github.com/Slachub",
                    followers_url:
                        "https://api.github.com/users/Slachub/followers",
                    following_url:
                        "https://api.github.com/users/Slachub/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/Slachub/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/Slachub/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/Slachub/orgs",
                    repos_url: "https://api.github.com/users/Slachub/repos",
                    events_url:
                        "https://api.github.com/users/Slachub/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/Slachub/received_events",
                    type: "Organization",
                    site_admin: false,
                },
                html_url: "https://github.com/Slachub/slachub-testing",
                description: null,
                fork: false,
                url: "https://api.github.com/repos/Slachub/slachub-testing",
                forks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/forks",
                keys_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/teams",
                hooks_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/hooks",
                issue_events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/events",
                assignees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
                branches_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
                tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/tags",
                blobs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
                git_tags_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
                git_refs_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
                trees_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
                statuses_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
                languages_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/languages",
                stargazers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
                contributors_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contributors",
                subscribers_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
                subscription_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/subscription",
                commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
                git_commits_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
                comments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
                issue_comment_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
                contents_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
                compare_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
                merges_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/merges",
                archive_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
                downloads_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/downloads",
                issues_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
                pulls_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
                milestones_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
                notifications_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
                labels_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
                releases_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
                deployments_url:
                    "https://api.github.com/repos/Slachub/slachub-testing/deployments",
                created_at: "2024-03-14T13:41:29Z",
                updated_at: "2024-03-16T13:18:03Z",
                pushed_at: "2024-03-17T20:36:27Z",
                git_url: "git://github.com/Slachub/slachub-testing.git",
                ssh_url: "git@github.com:Slachub/slachub-testing.git",
                clone_url: "https://github.com/Slachub/slachub-testing.git",
                svn_url: "https://github.com/Slachub/slachub-testing",
                homepage: null,
                size: 0,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                has_discussions: false,
                forks_count: 1,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 5,
                license: null,
                allow_forking: true,
                is_template: false,
                web_commit_signoff_required: false,
                topics: [],
                visibility: "public",
                forks: 1,
                open_issues: 5,
                watchers: 0,
                default_branch: "main",
                allow_squash_merge: true,
                allow_merge_commit: true,
                allow_rebase_merge: true,
                allow_auto_merge: false,
                delete_branch_on_merge: false,
                allow_update_branch: false,
                use_squash_pr_title_as_default: false,
                squash_merge_commit_message: "COMMIT_MESSAGES",
                squash_merge_commit_title: "COMMIT_OR_PR_TITLE",
                merge_commit_message: "PR_TITLE",
                merge_commit_title: "MERGE_MESSAGE",
            },
        },
        _links: {
            self: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7",
            },
            html: {
                href: "https://github.com/Slachub/slachub-testing/pull/7",
            },
            issue: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
            },
            comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/issues/7/comments",
            },
            review_comments: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/comments",
            },
            review_comment: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/comments{/number}",
            },
            commits: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7/commits",
            },
            statuses: {
                href: "https://api.github.com/repos/Slachub/slachub-testing/statuses/994111d1af4ecc721d377db6741b4d2e2493b52b",
            },
        },
        author_association: "COLLABORATOR",
        auto_merge: null,
        active_lock_reason: null,
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: "unknown",
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 1,
        deletions: 1,
        changed_files: 1,
    },
    requested_reviewer: {
        login: "sairamya93",
        id: 123948635,
        node_id: "U_kgDOB2NOWw",
        avatar_url: "https://avatars.githubusercontent.com/u/123948635?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sairamya93",
        html_url: "https://github.com/sairamya93",
        followers_url: "https://api.github.com/users/sairamya93/followers",
        following_url:
            "https://api.github.com/users/sairamya93/following{/other_user}",
        gists_url: "https://api.github.com/users/sairamya93/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/sairamya93/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/sairamya93/subscriptions",
        organizations_url: "https://api.github.com/users/sairamya93/orgs",
        repos_url: "https://api.github.com/users/sairamya93/repos",
        events_url: "https://api.github.com/users/sairamya93/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/sairamya93/received_events",
        type: "User",
        site_admin: false,
    },
    repository: {
        id: 772074151,
        node_id: "R_kgDOLgTqpw",
        name: "slachub-testing",
        full_name: "Slachub/slachub-testing",
        private: false,
        owner: {
            login: "Slachub",
            id: 163655420,
            node_id: "O_kgDOCcEu_A",
            avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Slachub",
            html_url: "https://github.com/Slachub",
            followers_url: "https://api.github.com/users/Slachub/followers",
            following_url:
                "https://api.github.com/users/Slachub/following{/other_user}",
            gists_url: "https://api.github.com/users/Slachub/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/Slachub/subscriptions",
            organizations_url: "https://api.github.com/users/Slachub/orgs",
            repos_url: "https://api.github.com/users/Slachub/repos",
            events_url: "https://api.github.com/users/Slachub/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/Slachub/received_events",
            type: "Organization",
            site_admin: false,
        },
        html_url: "https://github.com/Slachub/slachub-testing",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Slachub/slachub-testing",
        forks_url: "https://api.github.com/repos/Slachub/slachub-testing/forks",
        keys_url:
            "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Slachub/slachub-testing/teams",
        hooks_url: "https://api.github.com/repos/Slachub/slachub-testing/hooks",
        issue_events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/events",
        assignees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
        tags_url: "https://api.github.com/repos/Slachub/slachub-testing/tags",
        blobs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/Slachub/slachub-testing/languages",
        stargazers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
        contributors_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contributors",
        subscribers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
        subscription_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscription",
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/Slachub/slachub-testing/merges",
        archive_url:
            "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/Slachub/slachub-testing/downloads",
        issues_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
        releases_url:
            "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/deployments",
        created_at: "2024-03-14T13:41:29Z",
        updated_at: "2024-03-16T13:18:03Z",
        pushed_at: "2024-03-17T20:36:27Z",
        git_url: "git://github.com/Slachub/slachub-testing.git",
        ssh_url: "git@github.com:Slachub/slachub-testing.git",
        clone_url: "https://github.com/Slachub/slachub-testing.git",
        svn_url: "https://github.com/Slachub/slachub-testing",
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 5,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1,
        open_issues: 5,
        watchers: 0,
        default_branch: "main",
        custom_properties: {},
    },
    organization: {
        login: "Slachub",
        id: 163655420,
        node_id: "O_kgDOCcEu_A",
        url: "https://api.github.com/orgs/Slachub",
        repos_url: "https://api.github.com/orgs/Slachub/repos",
        events_url: "https://api.github.com/orgs/Slachub/events",
        hooks_url: "https://api.github.com/orgs/Slachub/hooks",
        issues_url: "https://api.github.com/orgs/Slachub/issues",
        members_url: "https://api.github.com/orgs/Slachub/members{/member}",
        public_members_url:
            "https://api.github.com/orgs/Slachub/public_members{/member}",
        avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
        description: null,
    },
    sender: {
        login: "vmatekole",
        id: 424339,
        node_id: "MDQ6VXNlcjQyNDMzOQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vmatekole",
        html_url: "https://github.com/vmatekole",
        followers_url: "https://api.github.com/users/vmatekole/followers",
        following_url:
            "https://api.github.com/users/vmatekole/following{/other_user}",
        gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/vmatekole/subscriptions",
        organizations_url: "https://api.github.com/users/vmatekole/orgs",
        repos_url: "https://api.github.com/users/vmatekole/repos",
        events_url: "https://api.github.com/users/vmatekole/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/vmatekole/received_events",
        type: "User",
        site_admin: false,
    },
};

export const PR_HOOK_COMMENT_1 = {
    action: "created",
    issue: {
        url: "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
        repository_url: "https://api.github.com/repos/Slachub/slachub-testing",
        labels_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/labels{/name}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/comments",
        events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/events",
        html_url: "https://github.com/Slachub/slachub-testing/pull/7",
        id: 2190854378,
        node_id: "PR_kwDOLgTqp85p3qex",
        number: 7,
        title: "Update README.md",
        user: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        labels: [],
        state: "open",
        locked: false,
        assignee: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        assignees: [
            {
                login: "vmatekole",
                id: 424339,
                node_id: "MDQ6VXNlcjQyNDMzOQ==",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/424339?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/vmatekole",
                html_url: "https://github.com/vmatekole",
                followers_url:
                    "https://api.github.com/users/vmatekole/followers",
                following_url:
                    "https://api.github.com/users/vmatekole/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/vmatekole/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/vmatekole/subscriptions",
                organizations_url:
                    "https://api.github.com/users/vmatekole/orgs",
                repos_url: "https://api.github.com/users/vmatekole/repos",
                events_url:
                    "https://api.github.com/users/vmatekole/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/vmatekole/received_events",
                type: "User",
                site_admin: false,
            },
        ],
        milestone: null,
        comments: 1,
        created_at: "2024-03-17T20:36:26Z",
        updated_at: "2024-03-17T20:44:23Z",
        closed_at: null,
        author_association: "COLLABORATOR",
        active_lock_reason: null,
        draft: false,
        pull_request: {
            url: "https://api.github.com/repos/Slachub/slachub-testing/pulls/7",
            html_url: "https://github.com/Slachub/slachub-testing/pull/7",
            diff_url: "https://github.com/Slachub/slachub-testing/pull/7.diff",
            patch_url:
                "https://github.com/Slachub/slachub-testing/pull/7.patch",
            merged_at: null,
        },
        body: null,
        reactions: {
            url: "https://api.github.com/repos/Slachub/slachub-testing/issues/7/reactions",
            total_count: 0,
            "+1": 0,
            "-1": 0,
            laugh: 0,
            hooray: 0,
            confused: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
        timeline_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7/timeline",
        performed_via_github_app: null,
        state_reason: null,
    },
    comment: {
        url: "https://api.github.com/repos/Slachub/slachub-testing/issues/comments/2002611560",
        html_url:
            "https://github.com/Slachub/slachub-testing/pull/7#issuecomment-2002611560",
        issue_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/7",
        id: 2002611560,
        node_id: "IC_kwDOLgTqp853XW1o",
        user: {
            login: "vmatekole",
            id: 424339,
            node_id: "MDQ6VXNlcjQyNDMzOQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vmatekole",
            html_url: "https://github.com/vmatekole",
            followers_url: "https://api.github.com/users/vmatekole/followers",
            following_url:
                "https://api.github.com/users/vmatekole/following{/other_user}",
            gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vmatekole/subscriptions",
            organizations_url: "https://api.github.com/users/vmatekole/orgs",
            repos_url: "https://api.github.com/users/vmatekole/repos",
            events_url:
                "https://api.github.com/users/vmatekole/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vmatekole/received_events",
            type: "User",
            site_admin: false,
        },
        created_at: "2024-03-17T20:44:22Z",
        updated_at: "2024-03-17T20:44:22Z",
        author_association: "COLLABORATOR",
        body: "Comment 1",
        reactions: {
            url: "https://api.github.com/repos/Slachub/slachub-testing/issues/comments/2002611560/reactions",
            total_count: 0,
            "+1": 0,
            "-1": 0,
            laugh: 0,
            hooray: 0,
            confused: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
        performed_via_github_app: null,
    },
    repository: {
        id: 772074151,
        node_id: "R_kgDOLgTqpw",
        name: "slachub-testing",
        full_name: "Slachub/slachub-testing",
        private: false,
        owner: {
            login: "Slachub",
            id: 163655420,
            node_id: "O_kgDOCcEu_A",
            avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Slachub",
            html_url: "https://github.com/Slachub",
            followers_url: "https://api.github.com/users/Slachub/followers",
            following_url:
                "https://api.github.com/users/Slachub/following{/other_user}",
            gists_url: "https://api.github.com/users/Slachub/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/Slachub/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/Slachub/subscriptions",
            organizations_url: "https://api.github.com/users/Slachub/orgs",
            repos_url: "https://api.github.com/users/Slachub/repos",
            events_url: "https://api.github.com/users/Slachub/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/Slachub/received_events",
            type: "Organization",
            site_admin: false,
        },
        html_url: "https://github.com/Slachub/slachub-testing",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Slachub/slachub-testing",
        forks_url: "https://api.github.com/repos/Slachub/slachub-testing/forks",
        keys_url:
            "https://api.github.com/repos/Slachub/slachub-testing/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/Slachub/slachub-testing/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Slachub/slachub-testing/teams",
        hooks_url: "https://api.github.com/repos/Slachub/slachub-testing/hooks",
        issue_events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/Slachub/slachub-testing/events",
        assignees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/Slachub/slachub-testing/branches{/branch}",
        tags_url: "https://api.github.com/repos/Slachub/slachub-testing/tags",
        blobs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/Slachub/slachub-testing/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/Slachub/slachub-testing/languages",
        stargazers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/stargazers",
        contributors_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contributors",
        subscribers_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscribers",
        subscription_url:
            "https://api.github.com/repos/Slachub/slachub-testing/subscription",
        commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/Slachub/slachub-testing/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/Slachub/slachub-testing/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/Slachub/slachub-testing/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/Slachub/slachub-testing/merges",
        archive_url:
            "https://api.github.com/repos/Slachub/slachub-testing/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/Slachub/slachub-testing/downloads",
        issues_url:
            "https://api.github.com/repos/Slachub/slachub-testing/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/Slachub/slachub-testing/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/Slachub/slachub-testing/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/Slachub/slachub-testing/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/Slachub/slachub-testing/labels{/name}",
        releases_url:
            "https://api.github.com/repos/Slachub/slachub-testing/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/Slachub/slachub-testing/deployments",
        created_at: "2024-03-14T13:41:29Z",
        updated_at: "2024-03-16T13:18:03Z",
        pushed_at: "2024-03-17T20:36:27Z",
        git_url: "git://github.com/Slachub/slachub-testing.git",
        ssh_url: "git@github.com:Slachub/slachub-testing.git",
        clone_url: "https://github.com/Slachub/slachub-testing.git",
        svn_url: "https://github.com/Slachub/slachub-testing",
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 5,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1,
        open_issues: 5,
        watchers: 0,
        default_branch: "main",
        custom_properties: {},
    },
    organization: {
        login: "Slachub",
        id: 163655420,
        node_id: "O_kgDOCcEu_A",
        url: "https://api.github.com/orgs/Slachub",
        repos_url: "https://api.github.com/orgs/Slachub/repos",
        events_url: "https://api.github.com/orgs/Slachub/events",
        hooks_url: "https://api.github.com/orgs/Slachub/hooks",
        issues_url: "https://api.github.com/orgs/Slachub/issues",
        members_url: "https://api.github.com/orgs/Slachub/members{/member}",
        public_members_url:
            "https://api.github.com/orgs/Slachub/public_members{/member}",
        avatar_url: "https://avatars.githubusercontent.com/u/163655420?v=4",
        description: null,
    },
    sender: {
        login: "vmatekole",
        id: 424339,
        node_id: "MDQ6VXNlcjQyNDMzOQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/424339?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/vmatekole",
        html_url: "https://github.com/vmatekole",
        followers_url: "https://api.github.com/users/vmatekole/followers",
        following_url:
            "https://api.github.com/users/vmatekole/following{/other_user}",
        gists_url: "https://api.github.com/users/vmatekole/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/vmatekole/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/vmatekole/subscriptions",
        organizations_url: "https://api.github.com/users/vmatekole/orgs",
        repos_url: "https://api.github.com/users/vmatekole/repos",
        events_url: "https://api.github.com/users/vmatekole/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/vmatekole/received_events",
        type: "User",
        site_admin: false,
    },
};
