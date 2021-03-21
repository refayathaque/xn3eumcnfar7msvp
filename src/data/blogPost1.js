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
  {
    text:
      "We'll start with S3 as it's sort of the bedrock of our website, the static file will live and be served from here. So we declare a <i>resource type</i> <code>aws_s3_bucket</code> resource with the <i>resource name</i>name <code>website_static_files</code>, as you'll see later, we'll use both the resource type and resource name to reference this bucket in other parts of our Terraform code. This resource will create the bucket as per the name we provide in the variables file, and set its access level accordingly. The ACL, or Access Control List, is set to private since we won't allow end users to access the bucket directly (they'll get to it through CloudFront). The policy document is also included, and you might be wondering why this is a data source. 🤔",
    id: Math.random(),
  },
  {
    text:
      "Above, we mentioned that data sources are used to <i>read only</i>, differentiating this from managed resources is the fact that it's primarily used to fetch existing configuration from AWS. So why is it being used here to create a custom IAM (Identity Access Management) policy? The distinguishing factor is that this is purely a policy <i>document</i>, we're simply using this data source to 'generate an <a href='https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document'>IAM policy document</a> in JSON format for use with resources that expect policy documents...Using this data source to generate policy documents is optional. It is also valid to use literal JSON strings in your configuration...' The alternative would be to plop the policy JSON in the S3 resource itself, but that would not be as legible. But in short, this is a data source because all it's doing is converting an IAM policy to JSON behind the scenes, it's not really 'managing' anything.",
    id: Math.random(),
  },
  {
    text:
      "The final resource type you see here is a <code>null resource</code>, which can use the Terraform <code>provisioner</code> feature to run bash commands from machine running Terraform. Here we tell Terraform to upload the static html file to S3, <i>only after the bucket has been created</i>, which is self-explanatory. The explicit <code>depends_on</code> is required here because this resource type isn't a part of the AWS provider, and so Terraform won't know how to interpret it when it builds it's dependency graph, we need to tell Terraform where this resource stands in terms of the order of operations.",
    id: Math.random(),
  },
  {
    heading: "ACM",
    id: Math.random(),
  },
  {
    gistId: "999546170efe381a6c9e2bc7e0f2df11",
    id: Math.random(),
  },
  {
    text:
      "Here we are creating a certificate through ACM but validating it using our domain purchased on GoDaddy. After this part of the code is run, Terraform will wait for you to take the CNAME name and value and add it as a GoDaddy DNS record. You'll either edit an existing CNAME record or create a new one (doesn't matter which). Using the created certificate under ACM in the AWS portal, you'll copy the CNAME <i>Name</i> to <i>Host</i> in GoDaddy, but only the part preceding <code>.(wtv_ur_domain_is).</code>. Similarly, you'll copy the CNAME <i>value</i> to <i>Points to</i>, but here you will include the entire value. While Terraform waits for you, it'll log something like <code>aws_cloudfront_distribution.distribution: Still creating... [2m30s elapsed]</code>. Screenshots below should help understand what you'll have to do.",
    id: Math.random(),
  },
  {
    image:
      "https://autom84good-research-public-images.s3.amazonaws.com/acm-validation-cname-name-value.png",
    id: Math.random(),
    alt: "ACM validation CNAME Name Value",
  },
  {
    image:
      "https://autom84good-research-public-images.s3.amazonaws.com/go-daddy-cname-for-cert-validation.png",
    id: Math.random(),
    alt: "GoDaddy CNAME for certificate validation",
  },
];
