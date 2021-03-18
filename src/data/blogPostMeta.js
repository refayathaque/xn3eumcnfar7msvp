import blogPost1 from "./blogPost1";

export default [
  {
    title: "Automate hosting a static website on AWS with Terraform",
    date: new Date().toDateString().toString(),
    author: "Refayat Haque",
    keywords: "AWS, Terraform",
    id: 1,
    potentialProblem: [
      "Increased rainfall in the north will increase the volume and velocity of a river upstream, causing river erosion and loss of land to inhabited communities downstream",
      "Temporary shelter is constructed in higher elevation, but this area is unfamiliar to locals and you need a website to delineate step-by-step directions",
    ],
    solution: [
      "Purchase an appropriate domain name with GoDaddy",
      "Configure Terraform and AWS on your local machine",
      "Run Terraform code to automate website hosting on AWS",
      "Get the website up and running in 15 minutes",
    ],
    assumptions: [
      "You already have a html file (addressing problem above) ready to go",
      "Have Terraform installed",
      "Have an AWS account and IAM user role with sufficient access",
      "Have a domain name purchased on GoDaddy",
      "Are a self-starter and can figure things out from Google :)"
    ],
    relatedLinks: [
      { linkTitle: "Code repository", link: "https://github.com/refayathaque/autom84good-research/tree/main/blog_post_1" },
      { linkTitle: "Download Terraform", link: "https://www.terraform.io/downloads.html" },
      { linkTitle: "Configuring the AWS CLI", link: "https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html" },
      { linkTitle: "DNS records: A beginner's guide", link: "https://www.godaddy.com/garage/dns-records-a-beginners-guide/" },
      { linkTitle: "Creating AWS IAM Users", link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html" },
    ],
    body: blogPost1,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date().toDateString().toString(),
    author: "Harry Mathers",
    keywords: "Azure, AWS",
    id: 2,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date().toDateString().toString(),
    author: "Marcus Rashford",
    keywords: "Vue Transitions",
    id: 3,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date().toDateString().toString(),
    author: "Harriet Tubman",
    keywords: "AWS S3 Hosting",
    id: 4,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date().toDateString().toString(),
    author: "David Beckham",
    keywords: "Azure Blob Hosting",
    id: 5,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: new Date().toDateString().toString(),
    author: "Trevor Noah",
    keywords: "Kubernetes",
    id: 6,
  },
];
