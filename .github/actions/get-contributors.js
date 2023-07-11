const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

const { data } = await octokit.request(
  "GET /repos/huijing/tools/collaborators",
  {
    owner: "huijing",
    repo: "tools",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }
);

console.log(data);
