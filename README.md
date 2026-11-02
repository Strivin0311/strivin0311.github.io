# Yunpeng Huang · Personal website

A bilingual personal homepage and everyday link collection, published with the existing GitHub Pages setup at **https://strivin0311.github.io/**.

## Edit

- `content.js`: biography, research interests, projects, eight publications/research articles, and 20 curated links. Publications use `section: "conference"` or `section: "research"`; reports, surveys, and blogs are explicitly labeled. Keep `en` and `zh` prose together; retain original destination URLs unless explicitly changing a link.
- `app.js`: interface translations, language preference, navigation, category filtering, and search.
- `index.html` / `style.css`: page structure and responsive visual design.
- `assets/llama-profile.png`: the owner-supplied avatar, also used on GitHub and Google Scholar. Keep image dimensions and alt text in `index.html` / `app.js` synchronized when replacing it.
- `magi_attn_wechat_qr.png`: **preserve this exact filename and root URL**. The existing MagiAttention QR publishing service updates this asset independently of the homepage. Neither the redesign nor future content edits should regenerate, rename, or remove it.
- `profile.png`: pre-existing asset, retained unchanged.

This is a buildless static site: there is no Python generation step, dependency installation, or external font service. The old JSON tables and `gen_index.py` have been retired. To preview:

```sh
python3 -m http.server 8770 --bind 127.0.0.1
```

Open `http://127.0.0.1:8770/`. The root defaults to Profile; `#links` opens Useful links. Language follows the browser initially and can be changed with EN / 中文; only this preference is stored in the visitor's browser. Search matches both translations and URLs. All data is static; opening a link does not grant access to a private repository.

Commit and push to the existing `main` branch to publish through GitHub Pages. `.nojekyll` keeps the static files unprocessed. Check the deployed HTML and assets after deployment; do not reconfigure hosting or the QR service as part of ordinary content edits.

## Content basis

Initial content was reviewed on 2026-11-01. Professional title was confirmed by the owner during this redesign. Biography and interests are editable introductory prose, not a formal CV. The owner uses the alias **Kato**; the legal/publication name remains Yunpeng Huang and the GitHub handle remains Strivin0311. The signature is “To encode the world and decode a better one.” The owner confirmed the degree wording as “M.S., Nanjing University” and the role as “AI Training Infra Engineer at SandAI”. The site does not infer graduation dates or citation statistics; the earlier student wording on Scholar is superseded by this confirmation.

Public sources:

- [GitHub profile](https://github.com/Strivin0311), [Google Scholar](https://scholar.google.com/citations?user=whzKjcIAAAAJ)
- [SandAI](https://sand.ai/), [MAGI-2 Preview](https://sand.ai/blog/magi-2-preview)
- [MagiAttention technical blog](https://sandai-org.github.io/MagiAttention/blog/)
- [MiniMax-01 technical report](https://arxiv.org/abs/2501.08313)
- [Long-context survey](https://arxiv.org/abs/2311.12351) (2023 original; 2024 revision)
- [MagiAttention contributor listing](https://github.com/SandAI-org/MagiAttention), [NJUDeepEngine](https://github.com/NJUDeepEngine)
- [Long-Context Attention Benchmark, ICLR 2026](https://proceedings.iclr.cc/paper_files/paper/2026/hash/7df69dbf39705c7a39b40f2d70e806c1-Abstract-Conference.html)
- [MAGI-1 technical report](https://arxiv.org/abs/2505.13211)
- [MeteoRA, ICLR 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/8951bbdcf234132bcce680825e7cb354-Abstract-Conference.html)
- [Neuro-symbolic Learning, NeurIPS 2023](https://papers.neurips.cc/paper_files/paper/2023/hash/4459c3c143db74ee52afebdf56836375-Abstract-Conference.html)

## 中文维护说明

网站沿用原有 GitHub Pages，在 `main` 提交并推送后发布，无需构建。默认打开个人主页，`#links` 打开常用链接。中英切换会更新两个栏目的内容，并只在访客本机记住语言选择；搜索支持中英描述和链接地址。

内容统一维护在 `content.js`，包括简介、方向、项目、8 项论文/研究文章和20 个常用链接。论文按 `section: "conference"` / `section: "research"` 分区，技术报告、综述和博客明确标注类型。界面翻译在 `app.js`，布局和样式分别在 `index.html`、`style.css`。原来的 JSON 表格和 Python 生成脚本已移除。本地预览使用上面的 HTTP 服务命令。

肖像采用本人提供的 `assets/llama-profile.png`，与 GitHub 和 Scholar 头像一致。`magi_attn_wechat_qr.png` 的文件名和根路径地址必须保持不变，原有二维码发布服务仍独立更新它；旧的 `profile.png` 也保留。普通页面更新不需要修改托管设置或二维码服务。

资料依据以上公开来源及本人确认的职位整理，核对日期为 2026-11-01。简介、兴趣方向可继续调整；花名为 Kato，论文署名仍为 Yunpeng Huang，GitHub 账号仍为 Strivin0311；个人签名为 “To encode the world and decode a better one.” 本人已确认职位为 “AI Training Infra Engineer at SandAI”，学历为 “M.S., Nanjing University”；此前的学生身份表述已被这次确认取代。不擅自推断毕业时间、引用统计或其他职称。

The 2026-11-01 Scholar refresh contains eight entries. “Technical Research” is displayed first with four entries. “Conference papers” follows with three conference publications and the long-context survey manuscript, grouped here at the owner’s request and labeled as an ACM Computing Surveys manuscript. The survey is linked to arXiv and is not labeled as an accepted ACM publication. The misattributed “Evaluating Large Language Models” survey is not included; the owner-authored long-context survey (arXiv:2311.12351) is included. MAGI-2 retains the team author credit “SandAI”.

2026-11-01 的 Scholar 更新核对后，共展示 8 项；Technical Research（技术研究）在前，共 4 项；Conference papers（会议论文）在后，包含 3 篇会议论文和 1 篇长上下文综述稿件。综述按本人要求归入此区，标注为 ACM Computing Surveys 稿件；链接仍指向 arXiv，不标为 ACM 已录用论文。不收录误归属的 “Evaluating Large Language Models” 综述，补入本人署名的长上下文综述（arXiv:2311.12351）。MAGI-2 保留 SandAI 团队署名。

On 2026-11-02, the PyTorch repository and pybind11 documentation shortcuts were removed at the owner’s request; the PyTorch documentation shortcut remains. The link collection now has nine repositories and eleven documentation entries.

2026-11-02 按本人要求移除 PyTorch 仓库和 pybind11 文档入口，保留 PyTorch 文档入口；常用链接现为 9 个仓库和 11 个文档。
