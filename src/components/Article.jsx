import "./Article.css"

export default function Article({date, title, imgSrc, imgAlt, content}) {
    const parsedDate = new Date(date);

    //We need the date in two formats: format one is YYYY-MM-DD and format two is MM/DD/YY
    //format one:
    const formattedISO = parsedDate.toISOString().split('T')[0];

    //format two:
    const formattedShort = new Intl.DateTimeFormat('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }).format(parsedDate);
    
    return(

        <article>
            <time dateTime={formattedISO}>{formattedShort}</time>
            <h2>{title}</h2>
            <img src={imgSrc} alt={imgAlt}/>
            <p>{content}</p>
            <div className="continueLink">

            <a href="#" >Continues ...</a>
            </div>
        </article>
    )
}