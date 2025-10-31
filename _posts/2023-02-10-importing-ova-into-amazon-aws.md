---
layout: post
title: “Importing OVA into Amazon AWS"
date: 2023-02-10
categories: Academia, Research
---

While working on a project, I needed to be able to import OVAs into my Amazon AWS account for use in various ways.

What I discovered is that Amazon’s documentation on this process is rather… dense and confusing. I spent a good amount of time trying to decipher what the documentation was actually telling me to do, but I finally cracked the code.

So, I thought I would document my steps here for my own benefit, and hopefully, this will save someone the time and hassle I went through.

CAVEAT – This process was successfully tested using an OVA. I do not know how (or if) it will work with a VMDK, OVF, VHD, or other file formats.

---

## Directions

1. Save the import.json file in a directory
2. Import the OVA into an S3 bucket.
3. In the S3 bucket, select the OVA and choose “Copy S3 URI”.
4. Edit the Url value in the import.json file and paste the S3 URL value.
5. Edit the Description value in the import.json file and provide an appropriate description.
6. Open a command prompt and navigate to the directory where you saved the import.json file
7. Run the command `aws ec2 import-image --description "ENTER VALUE HERE" --disk-containers "file://import.json”`
- `description` is a text value used to describe the import task.
- `file://` points to the location of the saved import.json file. If you did not navigate to the directory where the file is located, you will need to specify the full path here.
8. The import process will take a few minutes. Use the `aws ec2 describe-import-image-tasks` command to monitor import progress
9. Once the import process is complete, verify the image is in the AMI library.
10. Add tags to the AMI as appropriate to help you recall details such as the source of the OVA and any other relevant details.

---

## import.json file

~~~
[
    {
      "Description": "OVA DESCRIPTION",
      "Format": "ova",
      "Url": "s3://S3BUCKETNAME/FILENAME"
    }
]

~~~

---

## References

- <https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html>
- <https://aws.amazon.com/ec2/vm-import/>
- <https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html>