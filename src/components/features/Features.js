import "./features.css"

import any  from "../../images/icon-access-anywhere.svg";
import security  from "../../images/icon-security.svg";
import collabe  from "../../images/icon-collaboration.svg";
import file from "../../images/icon-any-file.svg";


export const Features = () => {
    const featuresItem = [
        {
            id: 1,
            icon: any,
            title: "Access your files, anywhere",
            description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. ",

        },
        {
            id: 2,
            icon: security,
            title: "Security you can trust",
            description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",

        },
        {
            id: 3,
            icon: collabe,
            title: "Real-time collaboration",
            description: "Securely share files and folders with friends, family and colleagues for live collaboration.  No email attachments required. ",

        },
        {
            id: 4,
            icon: file,
            title: "Store any type of file",
            description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. ",

        },
    ]
  return (
    <section>
        <div className="container">
            <div className="feature">
                {
                    featuresItem.map((items)=>{
                        return(
                            <div   className="items">
                                <img key={items.id} src={items.icon} alt="icon" />
                             <h1 key={items.id} >{items.title}</h1>
                            <p key={items.id}>{items.description}</p>
                            </div>

                        )

                    })
                }
            </div>
            
        </div>

    </section>
  )
}
