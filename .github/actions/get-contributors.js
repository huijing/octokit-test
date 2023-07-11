const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

async function test() {
  const { data } = await octokit.request(
    "GET /repos/huijing/tools/collaborators",
    {
      owner: "huijing",
      repo: "tools",
    }
  );
  console.log(data);
}

test();
