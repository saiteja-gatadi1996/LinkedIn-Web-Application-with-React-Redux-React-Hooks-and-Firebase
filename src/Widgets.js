import React from 'react'
import "./Widgets.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
function Widgets() {
    

    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
            
        </div>
        

       
        )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("The traits creative hires must have Share", "11d ago- 240 readers")}

            {newsArticle("Why women drop out of the workforce", "3d ago- 3,936 readers")}

            {newsArticle("India's love affair with biryani", "4d ago- 3,584 readers")}

            {newsArticle("Two new entrants in unicorn club", "4d ago- 6,408 readers")}

            {newsArticle("Hey Siri, start my car", "3d ago- 10,406 readers")}
        </div>
    )
}

export default Widgets
