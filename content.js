// The site's editable content. Keep both translations when changing prose.
export const profile = {
  bio: {
    en: 'I’m an AI Training Infrastructure Engineer at SandAI, focused on GPU kernels, distributed training, and long-context models. I like turning research ideas into systems that work in practice.',
    zh: '我在 SandAI 担任 AI 训练基础设施工程师，关注 GPU 算子、分布式训练与长上下文模型。我喜欢把研究里的想法，变成在真实场景中高效运转的系统。',
  },
  focus: [
    { title: { en: 'Efficient AI systems', zh: '高效 AI 系统' }, description: { en: 'GPU kernels, computation–communication overlap, and the details that decide performance.', zh: 'GPU 算子、计算通信重叠，以及那些真正决定性能的底层细节。' } },
    { title: { en: 'Training at scale', zh: '规模化训练' }, description: { en: 'Distributed attention, context parallelism, and making long-context training practical.', zh: '分布式注意力、上下文并行，让长上下文训练真正可用。' } },
    { title: { en: 'Learning in the open', zh: '开放地学习与分享' }, description: { en: 'Reading, experimenting, and sharing useful connections between research and engineering.', zh: '阅读、实验、整理，在研究与工程之间建立有用的连接。' } },
  ],
};

export const projects = [
  { name: 'MagiAttention', url: 'https://github.com/SandAI-org/MagiAttention', featured: true,
    label: { en: 'CORE CONTRIBUTOR · SANDAI', zh: '核心贡献者 · SANDAI' },
    description: { en: 'Distributed attention for ultra-long contexts and heterogeneous masks. Bringing kernel efficiency and context parallelism together.', zh: '面向超长上下文与异构掩码的分布式注意力，把算子效率与上下文并行连接起来。' },
    tags: ['GPU kernels', 'Distributed attention'], footer: { en: 'Explore the project', zh: '查看项目' } },
  { name: 'long-llms-learning', url: 'https://github.com/Strivin0311/long-llms-learning',
    label: { en: 'READING & REFERENCE', zh: '阅读与参考' },
    description: { en: 'A curated collection of long-context LLM methods and evaluation benchmarks.', zh: '关于长上下文大语言模型的方法、论文与评测基准的资料整理。' } },
  { name: 'llms-learning', url: 'https://github.com/Strivin0311/llms-learning',
    label: { en: 'A LEARNING NOTEBOOK', zh: '持续积累的学习笔记' },
    description: { en: 'Literature and resources collected while learning about large language models.', zh: '在学习大语言模型过程中积累的论文、资料与研究线索。' } },
];

export const publications = [
  { year: '2026', venue: 'ICLR 2026', title: 'Long-Context Attention Benchmark: From Kernel Efficiency to Distributed Context Parallelism',
    authors: 'Tao Bu, Qiangang Wang, Bowen Zeng, Hanwen Sun, Yunpeng Huang, Chun Cao, Jingwei Xu',
    url: 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/7df69dbf39705c7a39b40f2d70e806c1-Abstract-Conference.html',
    description: { en: 'A unified view of attention kernels and distributed context parallelism.', zh: '从注意力算子到分布式上下文并行的统一评测视角。' } },
  { year: '2025', venue: 'TECHNICAL REPORT · 2025', title: 'MAGI-1: Autoregressive Video Generation at Scale',
    authors: { en: 'Sand.ai et al., including Yunpeng Huang', zh: 'Sand.ai 等，作者包括 Yunpeng Huang' },
    url: 'https://arxiv.org/abs/2505.13211',
    description: { en: 'Large-scale autoregressive video generation.', zh: '大规模自回归视频生成。' } },
  { year: '2025', venue: 'ICLR 2025', title: 'MeteoRA: Multiple-tasks Embedded LoRA for Large Language Models',
    authors: 'Jingwei Xu, Junyu Lai, Yunpeng Huang',
    url: 'https://proceedings.iclr.cc/paper_files/paper/2025/hash/8951bbdcf234132bcce680825e7cb354-Abstract-Conference.html',
    description: { en: 'Bringing multiple task-specific LoRA adapters into one model.', zh: '在一个模型中组合多个面向不同任务的 LoRA 适配器。' } },
  { year: '2023', venue: 'NEURIPS 2023', title: 'Neuro-symbolic Learning Yielding Logical Constraints',
    authors: 'Zenan Li, Yunpeng Huang, Zhaoyu Li, Yuan Yao, Jingwei Xu, Taolue Chen, Xiaoxing Ma, Jian Lu',
    url: 'https://papers.neurips.cc/paper_files/paper/2023/hash/4459c3c143db74ee52afebdf56836375-Abstract-Conference.html',
    description: { en: 'Connecting neural learning with symbolic constraint synthesis.', zh: '连接神经网络学习与符号逻辑约束的合成。' } },
];

export const linkGroups = [
  { id: 'repositories', title: { en: 'Repositories', zh: '仓库与工作台' }, subtitle: { en: 'The places where things get built.', zh: '构建、实验与维护发生的地方。' }, items: [
    { title: 'GitHub / Strivin0311', url: 'https://github.com/Strivin0311', icon: 'GH', description: { en: 'My GitHub profile and repositories.', zh: '我的 GitHub 主页与个人仓库。' } },
    { title: 'MagiAttention', url: 'https://github.com/SandAI-org/MagiAttention', icon: 'MA', description: { en: 'Distributed attention and long-context training.', zh: '分布式注意力与长上下文训练。' } },
    { title: 'MagiFSDP', url: 'https://github.com/SandAI-org/MagiFSDP', icon: 'MF', description: { en: 'Fully sharded data parallelism.', zh: '全分片数据并行相关开发。' } },
    { title: 'MagiMoE', url: 'https://github.com/SandAI-org/MagiMoE', icon: 'MM', description: { en: 'Mixture-of-experts kernels and systems.', zh: 'Mixture-of-Experts 算子与系统。' } },
    { title: 'Odin', url: 'https://github.com/world-sim-dev/odin', icon: 'OD', description: { en: 'Training infrastructure and development.', zh: '训练基础设施与日常开发。' } },
    { title: 'Magicore', url: 'https://github.com/world-sim-dev/magicore', icon: 'MC', description: { en: 'The home of integrated training workflows.', zh: '集成训练工作流与实验开发。' } },
    { title: 'Kian', url: 'https://github.com/SandAI-org/kian/tree/dev_kato', icon: 'KI', description: { en: 'My dev_kato branch for everyday automation.', zh: '日常自动化服务所在的 dev_kato 分支。' } },
    { title: 'Alchemy', url: 'https://github.com/world-sim-dev/alchemy/tree/dev_kato', icon: 'AL', description: { en: 'My dev_kato branch for experiment operations.', zh: '实验运维相关的 dev_kato 分支。' } },
    { title: 'AI Agent Contexts', url: 'https://github.com/Strivin0311/ai-agent-contexts', icon: 'AC', description: { en: 'A shared home for agent context and handoffs.', zh: 'Agent 上下文、交接与知识的共享仓库。' } },
    { title: 'PyTorch', url: 'https://github.com/pytorch/pytorch/tree/main/', icon: 'PT', description: { en: 'Source code, development, and discussions.', zh: 'PyTorch 源码、开发进展与讨论。' } },
  ] },
  { id: 'documentation', title: { en: 'Documentation', zh: '文档与参考' }, subtitle: { en: 'Good references, always within reach.', zh: '经常翻阅的技术文档，随手就能找到。' }, items: [
    { title: 'PyTorch', url: 'https://pytorch.org/docs/stable/index.html', icon: 'PT', description: { en: 'Stable API reference and user guides.', zh: '稳定版 API 参考与用户指南。' } },
    { title: 'CUDA Toolkit', url: 'https://docs.nvidia.com/cuda/index.html', icon: 'CU', description: { en: 'Programming guides, best practices, APIs, and PTX.', zh: '编程指南、最佳实践、API 与 PTX ISA。' } },
    { title: 'CUTLASS', url: 'https://docs.nvidia.com/cutlass/index.html', icon: 'CT', description: { en: 'GPU linear algebra and kernel building blocks.', zh: 'GPU 线性代数与算子构建模块。' } },
    { title: 'CCCL', url: 'https://nvidia.github.io/cccl/unstable/cpp.html', icon: 'CC', description: { en: 'CUDA Core Compute Libraries for C++.', zh: 'CUDA C++ 核心计算库文档。' } },
    { title: 'NCCL', url: 'https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html', icon: 'NC', description: { en: 'Multi-GPU collective communication.', zh: '多 GPU 集合通信用户指南。' } },
    { title: 'NVSHMEM', url: 'https://docs.nvidia.com/nvshmem/api/index.html', icon: 'NS', description: { en: 'GPU-initiated communication and shared memory.', zh: 'GPU 发起的通信与共享内存 API。' } },
    { title: 'Nsight Systems', url: 'https://docs.nvidia.com/nsight-systems/UserGuide/index.html', icon: 'SY', description: { en: 'System-wide profiling, traces, and CLI reference.', zh: '系统级性能分析、时间线与命令行参考。' } },
    { title: 'Nsight Compute', url: 'https://docs.nvidia.com/nsight-compute/NsightCompute/index.html', icon: 'CO', description: { en: 'Kernel profiling and GPU performance metrics.', zh: '算子性能剖析与 GPU 性能指标。' } },
    { title: 'Compute Sanitizer', url: 'https://docs.nvidia.com/compute-sanitizer/ComputeSanitizer/index.html', icon: 'CS', description: { en: 'Debugging memory, races, and synchronization.', zh: '内存错误、数据竞争与同步问题排查。' } },
    { title: 'Triton', url: 'https://triton-lang.org/main/python-api/triton.language.html', icon: 'TR', description: { en: 'Triton language API reference.', zh: 'Triton 语言 API 参考。' } },
    { title: 'pybind11', url: 'https://pybind11.readthedocs.io/en/stable/index.html', icon: 'PY', description: { en: 'Connecting Python and C++.', zh: 'Python 与 C++ 的绑定与互操作。' } },
    { title: 'NVIDIA PyTorch Release Notes', url: 'https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/index.html', icon: 'NG', description: { en: 'NGC PyTorch container releases and compatibility.', zh: 'NGC PyTorch 镜像发布与兼容性说明。' } },
  ] },
];
