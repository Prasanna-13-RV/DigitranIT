const firstSectionServices = document.querySelector('.left-main-div-services');

const firstServiceBlock = document.querySelector('.first-service-block');
const secondServiceBlock = document.querySelector('.second-service-block');
const thirdServiceBlock = document.querySelector('.third-service-block');
const fourthServiceBlock = document.querySelector('.forth-service-block');
const fifthServiceBlock = document.querySelector('.fifth-service-block');
const sixthServiceBlock = document.querySelector('.sixth-service-block');

const leftServices = document.querySelector('.left-services');

const servicepage = (block, message, bgcolorPara ,colorPara) => {
    block.addEventListener('click', () => {
        leftServices.innerHTML = message;
        leftServices.style.backgroundColor = bgcolorPara;
        leftServices.style.color = colorPara;
    });
}

servicepage(firstSectionServices, `<b>We are your ally, not just your developer</b><br>Always be on the lookout
for new
opportunities`, "#fff" , "#000");

servicepage(firstServiceBlock, `Every good business requires a website and a mobile app. Stuck at that step? Don't Worry! Our team of trained professionals will work very diligently in creating the best possible solutions to your problems.` , "rgba(197, 26, 26, 0.8)", "#fff");

servicepage(secondServiceBlock, `Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software. Just like people, software robots can do things like basic cognitive functions, and perform a wide range of defined actions. But software robots can do it faster and more consistently than people.`, "rgba(43, 26, 197, 0.8)", "#fff");

servicepage(thirdServiceBlock, `Business process management (BPM) leverages software and services to provide total visibility into your organization’s business processes. BPM helps you automate, monitor and optimize continuously improve business processes to increase efficiency and reduce costs. Success breeds success, so we take an incremental approach that allows us to quickly prove our value with a single project.`, "rgba(26, 197, 35, 0.8)", "#fff");

servicepage(fourthServiceBlock, `Cloud migration is the process of moving digital assets — like data, workloads, IT resources, or applications — to cloud infrastructure. Cloud migration commonly refers to moving tools and data from old, legacy infrastructure or an on-premises* data center to the cloud. Basically, we are taking a huge burden off your shoulders and putting them onto our servers.`, "rgba(160, 197, 26, 0.8)", "#fff");

servicepage(fifthServiceBlock, `Business is moving faster than ever before, with new skill requirements constantly emerging, particularly within technology roles. This shift presents a challenge for leaders of HR and talent acquisition - how do they locate and attract these niche skills? Well, we are here to streamline the process and make it all the more amazing.`, "rgba(197, 26, 189, 0.8)", "#fff");

servicepage(sixthServiceBlock, `We support our customers to transform their current state business operations into Artificial Intelligence (AI) based Data Analytics powered IOT supportable Digital Transformation solutions in a phased manner, using the sustainably scalable Cloud platforms provided by the leading Cloud computing services providers Amazon, Google and Azure.`, "rgba(0, 0, 0, 0.8)", "#fff");