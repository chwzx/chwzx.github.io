var posts=["2025/01/01/C-内存分配器/","2022/03/06/ACM_数论/","2024/06/02/HTTP请求内容/","2024/09/24/Hot100-Day1/","2022/01/11/Hyperldeger-Fabric环境搭建/","2024/11/30/Intel-SGX-for-Ubuntu/","2024/06/02/Rust-Warp处理HTTP请求/","2024/05/11/Rust单链表/","2024/11/30/SGX中使用GMP-PBC/","2022/07/10/以太坊测试网络Rinkeby使用教程/","2022/03/06/区块链溯源系统环境部署/","2022/07/08/如何使用goblintownNFT智能合约发布属于自己的NFT/","2022/07/08/如何在Linux上部署IPFS/","2025/01/01/智能指针源码剖析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };