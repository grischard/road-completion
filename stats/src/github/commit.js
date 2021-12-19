import.meta.hot;

import { Octokit } from '@octokit/rest';

import { OWNER, REPOSITORY } from '../constants';

export default async function (ref) {
  const octokit = new Octokit({
    auth: import.meta.env.PUBLIC_GITHUB_TOKEN || null
  });

  const { data } = await octokit.repos.getCommit({
    owner: OWNER,
    repo: REPOSITORY,
    ref
  });

  return data;
}
