import blogPost1 from "./blogPost1";

export default [
  {
    title: "Automate hosting a static website on AWS with Terraform",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "AWS, Terraform",
    id: 1,
    active: true,
    potentialProblem: [
      "Increased rainfall in the north will increase the volume and velocity of a river upstream, causing river erosion and loss of land to inhabited communities downstream",
      "Temporary shelter is constructed in higher elevation, but this area is unfamiliar to locals and you need a website to delineate step-by-step directions",
    ],
    solution: [
      "Purchase an appropriate domain name on GoDaddy",
      "Configure Terraform and AWS on your local machine",
      "Run Terraform code to automate website hosting on AWS",
      "Get a website up and running in 15 minutes ⏱️",
    ],
    assumptions: [
      "You already have a html file (addressing problem above) ready to go",
      "Have Terraform installed",
      "Have an AWS account and IAM user role with sufficient access",
      "Have a domain name purchased on GoDaddy",
      "Are a self-starter and can figure things out by Googling 🤓",
    ],
    relatedLinks: [
      {
        linkTitle: "Code repository",
        link:
          "https://github.com/refayathaque/autom84good-research/tree/main/blog_post_1",
      },
      {
        linkTitle: "Download Terraform",
        link: "https://www.terraform.io/downloads.html",
      },
      {
        linkTitle: "Configuring the AWS CLI",
        link:
          "https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",
      },
      {
        linkTitle: "DNS records: A beginner's guide",
        link: "https://www.godaddy.com/garage/dns-records-a-beginners-guide/",
      },
      {
        linkTitle: "Creating AWS IAM Users",
        link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
      },
    ],
    body: blogPost1,
  },
  {
    title: "Coming soon...",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "AWS, Docker",
    id: 2,
    active: false,
  },
  {
    title: "Coming soon...",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "Vue, CSS, Transitions",
    id: 3,
    active: false,
  },
  {
    title: "Coming soon...",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "Azure, Terraform",
    id: 4,
    active: false,
  },
  {
    title: "Coming soon...",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "AWS, Serverless, SAM",
    id: 5,
    active: false,
  },
  {
    title: "Coming soon...",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "Kubernetes",
    id: 6,
    active: false,
  },
];
