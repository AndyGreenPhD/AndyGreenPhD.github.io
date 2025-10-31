---
layout: post
title: “Converting VM images to Docker containers"
date: 2022-01-26
categories: Research
---

I’m starting to experiment with Docker containers. From a pedagogical perspective, I see lots of opportunities to quickly and easily script environments to support hands-on lab objectives for my students. Being able to create a series of images, push them to a public Docker repo, and then store a Docker compose script in a Github repo for students to access and run as needed just seems like the way to go. Students can choose to run the lab environment locally, or they can stand up a cloud-based VM in AWS, Azure, Digital Ocean, Linode… you get the idea.

I have a small library of existing VMs that may be useful, and I’m lazy enough that I don’t want to rebuild them from scratch as containers. I figured there has to be a way to convert VMs on my Win10 system to Docker containers, and there is. However, it is not a simple process and is time-consuming. I am documenting the steps I followed below, in the hopes that it can help someone else down the road, and for me to refer to in the future. A word of caution – I tested this by converting a Linux VM. I have not tested with a Windows VM, but my expectation is that the conversion process will still work.

These instructions were pieced together from the following sources:

- <https://www.vinnie.work/blog/2021-03-19-virtualmachine-to-docker/>
- <https://dannyda.com/2020/06/25/how-to-use-qemu-img-command-to-convert-between-vmdk-raw-qcow2-vdi-vhd-vhdx-formats-disk-images-qemu-img-create-snapshot-resize-etc/>
- <https://www.unixmen.com/run-kali-linux-2-0-in-docker-container/>

My current environment is a Win10 Enterprise System with WSL and Ubuntu app installed.

1. Open your Ubuntu app and jump into root by typing `su root`
2. Fully update Ubuntu by typing `apt-get update && apt-get upgrade`
3. We will use qemu-img to convert the existing VM VDMK file to a RAW file for Docker use. Install qemu-img by typing `apt-get install qemu-utils` and accept all prompts
4. Ubuntu automatically maps the Windows C partition for access. My VMs are in separate folders in the Windows partition located in c:\agreen\VMs To access that folder, I typed `cd /mnt/c/agreen\VMs` (NOTE: you will need to use the directory name on your system where you have your VMs stored)
5. Next, you need to convert your existing VMDK to a raw file for further use. Prior to beginning the conversion process, I created a directory named container under the specific VM folder of the image I’m converting. I’ll use this folder to hold my conversion work product.
6. Now you’re ready to convert the VMDK to a raw file. The syntax is `qemu-img convert -O raw <source VMDK file> <destination>`. In my case, I typed `qemu-img convert-O raw image.vdmk container/image.raw` (WARNING – This conversion process can take a while, depending on VMDK size)
7. Once the conversion process is complete, you need to look at the partition table on the new RAW file in order to get details necessary to mount the file for further use. I typed `parted -s container/image.raw unit b print` to get the data I needed in order to mount the partition. Below is my output – yours may vary. The important thing to pick up is the value in the “Start” column for the boot sector. In my case, it was **1045876**
!(assets/img/2022-01-26-parted.png)