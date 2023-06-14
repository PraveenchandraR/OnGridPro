import React, { createContext, useState } from "react";

export const DataBlog = createContext();
function BussinessStore (props) {
    
    const [businesstype, SetBusinessType] = useState([
        {
            category: "business",
            image: "https://ongrid.in/images/home/education.png",
            id: 1,
            title: "Education/EdTech",
            Discription: "With the rise in demand, organizations in the Education and EdTech sector are on a hiring spree. The primary users of your service or platform are students, and their safety and learning outcomes are of paramount importance. BGV thus ensures the quality of new hires - tutors, administrative staff, or sales staff, thus helping towards a productive and safe learning environment.",
    
             para:"Teachers and Tutors, administrative staff, field sales staff, other employees",
        
            backimage: "https://ongrid.in/images/home/education.png",
      
        },
        {
            category: "business",
            image: "https://ongrid.in/images/home/man-162951_1920.jpg",
            id:2,
            title: "Staffing",
            Discription: "The staffing industry has been at the forefront of a paradigm shift with respect to the way employees are hired and deployed. With the aspect of long-term full-time employment being actively replaced with freelancing and temporary stints, more and more organizations (clients) rely on staffing companies for their staff needs. At the same time, these organizations are looking for verified people to be deployed at their sites. Staffing companies can not only reduce risk through background verification but also use it as a differentiator to win client contracts.",
          para:"Blue-collar workers (eg. security guards, delivery boys, warehouse staff), Grey-collar workers (sales executives, field operations executives, tele-callers)",
   
            backimage:"https://ongrid.in/images/home/man-162951_1920.jpg",  
        },
         {
            category: "business",
            image: "https://ongrid.in/images/home/logistics-852936_1920.jpg",
            id:3,
            title: "Transportation, Logistics, eCommerce",
             Discription: "With the adoption of high-technology in the supply chain sector, the industry has involuntarily become a massive driver of change, especially in developing economies. With delivery boys and warehouse staff handling high-value inventory, engaging with end customers at their doorsteps, or ferrying passengers, having an accountable workforce is not just desirable, but also necessary.",
             para: "Drivers, delivery boys, warehouse staff, field executives, supervisors, distribution center workforce, other employees",
       
            
            backimage:"https://ongrid.in/images/home/logistics-852936_1920.jpg",

            
        },
          {
            category: "business",
            image: "https://ongrid.in/images/home/banking.png",
            id:4,
            title: "Banking, Financial Services, Insurance and Fin-Tech",
              Discription: "Banking, Financial Services, and Insurance sector has gone through a decade of exponential growth with rapid innovation in technology (the rise of fintech) and rise in per capita income of the consumers. This period of unprecedented growth has been accompanied with ever increasing compliance and regulatory burden, especially given the employee access to highly sensitive financial data. This brings in its own source of challenges where the accountability of workforce is of supreme importance especially.",
              para: "Corporate staff, retail store executives, cashiers, front office executives, room service staff, supervisors and team leads, chefs, kitchen staff, waiters and servers, other employees and contractors",
    
            backimage:"https://ongrid.in/images/home/banking.png",

            
        },
           {
            category: "business",
            image: "https://ongrid.in/images/home/shopping-1165437_1920.jpg",
            id:5,
            title: "Retail, Hospitality, F&B",
               Discription: "As we step into the new decade, the Retail, Hospitality, and F&B sector have not only grown but evolved to justify the 21st-century aspiration and pallette! The beauty of the industry involves an intimate experience delivered to its stakeholders thus living up to the term hospitality. Considering that each member of the workforce represents your brand, hiring and retaining a thorough breed of professionals becomes critical. Therefore, BGV is a common and accepted norm across the industry.",
               para: "Corporate staff, retail store executives, cashiers, front office executives, room service staff, supervisors and team leads, chefs, kitchen staff, waiters and servers, other employees and contractors",

            
            backimage:"https://ongrid.in/images/home/shopping-1165437_1920.jpg",

            
        },
            {
            category: "business",
            image: "https://ongrid.in/images/home/shopping-1165437_1920.jpg",
            id:6,
            title: "Manufacturing",
                Discription: "In addition to the compliances required to run a manufacturing setup, the sector has always been vulnerable to falling prey to incidents of destructive herd mentality. Therefore, it becomes critical to mitigate the risk through the BGV of the workforce, especially those working in factories, plants, and production lines.",
             para:"Assembly line workforce (permanent and contractual), shop floor executives, other workers in factories and plants, corporate office employees",

            backimage:"https://ongrid.in/images/home/shopping-1165437_1920.jpg",

            
        },
             {
            category: "business",
            image: "https://ongrid.in/images/home/informationTechnology.png",
            id:7,
            title: "IT/ITes",
                 Discription: "The IT/ITes sector and exports have propelled the growth of services sector in many geographies, making them the preferred offshore development destination. The IT industry hires millions of new employees/contractors every year. This sector needs to be well prepared to adhere to the Governance, Risk, and Compliance requirements that new age international engagements demand. To safeguard the interests of clients, accountability of its employees is of the highest importance, and BGV has become a standard across the industry.",
            para:"Software development engineers, QA engineers, database and network administrators, client support staff, project managers, other employees.",
              list1:"ID verification ",
list2:"Address verification",

            backimage:"https://ongrid.in/images/home/informationTechnology.png",

            
        },
             {
            category: "business",
            image: "https://ongrid.in/images/home/healthcare.png",
            id:8,
            title: "Healthcare",
            Discription: "Healthcare industry globally will continue to grow with improving health seeking behavior and growing concerns for personal health among the general population. An impetus to this has been witnessed due to COVID-19, with a higher demand for testing done from the comforts of home. Provided the nature of work in the sector where there is a close engagement of the staff with service seekers, at home or in hospitals and clinics, and staff having access to highly sensitive medical data as well as drugs, BGV is essential to avoid any unforeseen situations.",
           para:"",
            backimage:"https://ongrid.in/images/home/healthcare.png",
   
        },
                {
            category: "business",
            image: "https://ongrid.in/images/home/internetPlatforms.png",
            id:9,
            title: "Internet Platforms",
            Discription: "Modern-day internet platforms have redefined the way businesses are conducted, and customers or users are acquired. While digital distribution definitely helps in onboarding the customers or users faster, it definitely leaves the businesses susceptible to compliance risks, identity frauds, and/or banking frauds. Instant verification and/or KYC of customers or users can help in compliance adherence and risk mitigation, without adding friction to the seamless onboarding.",
          
          para:"Customers, users, sellers, and buyers on a marketplace, merchants, service providers, platform partners",
            backimage:"https://ongrid.in/images/home/internetPlatforms.png",
   
        }


    ]);

    return (
        <DataBlog.Provider value={[businesstype, SetBusinessType]}>
            {props.children}
            
        </DataBlog.Provider>
    );
}
export default BussinessStore;
