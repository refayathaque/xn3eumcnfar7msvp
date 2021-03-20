export default [
  {
    image:
      "https://images.unsplash.com/photo-1519045944554-410ad39c1af8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2547&q=80",
    id: Math.random(),
    alt: "Green plants in Vienna, Austria. Photographed by Katja-Anna Krug",
  },
  {
    heading: "Why use Terraform instead of point-click-type in AWS console?",
    id: Math.random(),
  },
  {
    text:
      "There are three major benefits to using infrastructure-as-code tools like Terraform to build and maintain your application in the Cloud. The first is being efficiency, you don't have to go into the AWS console and point-and-click for building new, optimizing or re-configuring existing, infrastructure. In the AWS portal's defense, it's not complicated (relative to, say, the concept of antimatter in particle physics), but it's still time consuming to read through, click around to find and navigate, and type things in. The second advantage of using IaC is the fact that it can be source-controlled, which drastically reduces the propensity for mistakes, because there is now an audit log of everything going on with your infrastructure.",
    id: Math.random(),
  },
  {
    text:
      "Thanks to source-controlled IaC, you and your team can validate, track and monitor what changes are being implemented, more importantly, you can debug and troubleshoot much faster. The third and final benefit is that it precludes you from having to repeat tasks, the intention with the code we are providing is for you to deploy multiple websites by just changing the domain name. IaC allows you to modularize common infrastructure patters, in addition to this example, think creating multiple VPCs for different applications by just changing CIDR ranges (e.g, 10.1.0.0/16 for one and 10.2.0.0/16 for the other) in your IaC.",
    id: Math.random(),
  },
  {
    heading:
      "Purchasing domain on GoDaddy and understanding relevant AWS services",
    id: Math.random(),
  },
  {
    text:
      "While you're open to buying your domain from somewhere else, we prefer the simplicity (and pricing) of GoDaddy. In fact, AWS will also sell you a domain through their DNS (Domain Name System) service, Route53. Once you have your domain purchased you're good to go and can start looking at the terraform code in the repository. But before diving into the code it makes sense to get a lay of the land, understanding why we'll be using these specific AWS services.",
    id: Math.random(),
  },
  {
    text:
      "AWS Certificate Manager, better known as 'ACM', issues Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS resources. We will need a certificate to establish secure networking communications over our website and the end-user, this certificate will essentially verify the identity of our website over the internet. Without a certificate, you won't see the lock on the left side of the url displayed in your Chrome browser. Considering the hypothetical problem statement mentioned at the start of this post, it's paramount that entities like local governments <strong>maintain trust and distance nefarious actors</strong> during times of crises.",
    id: Math.random(),
  },
  {
    text:
      "CloudFront is a Content Distribution Network (CDN) that helps to deliver content to end users with low latency, but more importantly, it helps to deliver content to end users <strong>securely</strong>. In addition to serving traffic over HTTPS (Hypertext Transfer Protocol Secure), it protects us from DDoS attacks. CloudFront is also a requirement for us to be able to use the ACM issued certificate.",
    id: Math.random(),
  },
  {
    text:
      "Route 53 allows us to route end users to our applications hosted in AWS, it translates domain names (e.g., www.helloworld.com) to IP addresses like 192.9.8.1 and thats what computers use to connect with each other. In this guide we will use Route 53 to direct our end users to the CloudFront distribution, Route 53 will map the domain name from GoDaddy to the distribution, but more on this later.",
    id: Math.random(),
  },
  {
    text:
      "S3, short for Amazon Simple Storage Service, is an all-purpose object storage service with availability, security and performance at its core. It's a versatile storage service allowing us to store things from images and PDFs to website static content and client-side scripts. One key reason we love S3 is because of its 99.999999999% (11 9's) of durability, it's nice to be able to sleep at night. However, the most relevant S3 provision in our case is its ability to <a href='https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html'>host static websites</a> <i>very</i> easily.",
    id: Math.random(),
  },
  {
    heading: "Terraform code basics",
    id: Math.random(),
  },
  {
    text:
      "As you peruse the files in the repository, you must be thinking how these files are going to be processed. The order of the code, and in which <code>.tf</code> (terraform) file you place it in doesn't matter. Terraform is smart enough to know that it needs to look for HCL (low-level syntax of the Terraform language) code defining cloud resources only within <code>.tf</code> files, once it gets all the code it'll organize based on the dependency graph and prepare for you. What is a <a href='https://learn.hashicorp.com/tutorials/terraform/dependencies'>dependency graph</a> you ask? It's Terraform's way of knowing the order of resource provisioning (because certain AWS resources need to exist prior to others, e.g., you can't upload the <code>index.html</code> without there being an S3 bucket first), and this is built before you run the code.",
    id: Math.random(),
  },
  {
    text:
      "You'll see a file containing the <a href='https://www.terraform.io/docs/language/providers/index.html'>provider</a>, and that's what gives Terraform the knowledge it needs to create the dependency graph. But at a broader level, the provider is a plugin that allows Terraform to leverage AWS APIs to provision resources. Providers supply Terraform with the resource types, arguments, data sources, etc., in needs to comprehend, and act on, our IaC. Terraform will not know what to do without a provider, think of it as an API library that helps make sense of your IaC and build infrastructure remotely.",
    id: Math.random(),
  },
  {
    text:
      "Before diving into the AWS service specific Terraform code, it's worthwhile to get a grasp over the <code>output.tf</code> and <code>vars.tf</code> files. Starting with the vars file, you see that we are declaring variables here, and this is really what modularizes things in the Terraform world. You can use these input variables as parameters for your IaC, and this allows you to customize how your code without actually having to change any of the configuration. One of the input variables is the <code>DOMAIN_NAME</code>, which makes sense because this will vary from website to website. Moving to the output file, these are values Terraform return once it's provisioned all resources, we will need <code>route-53-hosted-zone-name-servers</code> to complete our GoDaddy configuration as you'll see.",
    id: Math.random(),
  },
  {
    text:
      "Our code comprises of mostly resources, and these are deemed the most significant part of the Terraform language. A resource block is designed to describe a single, or several, infrastructure object(s), things like AWS VPCs (Virtual Private Cloud), EC2 (Elastic Compute Cloud) instances or an S3 bucket. When writing Terraform IaC you will work with resources for the most part, but now and then you might have to rely on a data source. The key difference between a data source and <i>resource</i> is that the resource is considered <i>managed</i> because you use the block to create, update, and delete infrastructure, but data sources only <i>read</i> objects.",
    id: Math.random(),
  },
  {
    heading: "Analyzing Terraform resources and interplay between AWS services",
    id: Math.random(),
  },
  {
    gistId: "b520a9ffa9a8b4d8f0eacdcd85aa5b64",
    id: Math.random(),
  },
];
