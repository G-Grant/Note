<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {
    const linkGitalk = document.createElement("link");
    linkGitalk.href = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";
    linkGitalk.rel = "stylesheet";
    document.body.appendChild(linkGitalk);
    let body = document.querySelector(".gitalk-container");
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: "a6b53533679a097b4df1",
        clientSecret: "a741f69117f30107b5c10b8fa88781d8e1ec68b6",
        repo: "Note",
        owner: "G-Grant",
        admin: ["G-Grant"],
        id: location.pathname,
        distractionFreeMode: false
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render("gitalk-container");
    };
  }
};
</script>
