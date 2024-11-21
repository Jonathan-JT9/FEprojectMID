import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Body = () => {
  const [body, setBody] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const bodyRef = ref(db, "body");
    onValue(bodyRef, (snapshot) => {
      const data = snapshot.val();
      setBody(data);
    });
  }, []);
  return (
    <body>
      <div id="page-wrap">
        <div className="bg">
          <img src={`data:image/jpg;base64,${body.image}`} alt="" />
        </div>
        <div id="contact-info" class="vcard">
          <h1 class="fn">{body.Title}</h1>
          <p>
            {body.text1} <span class="tel">{body.number}</span>
            <br />
            {body.text2}
            <a class="email" href="mailto:nathantambuku13@gmail.com">
              {body.email}
            </a>
          </p>
        </div>
        <div id="objective">
          <p>{body.paragraph}</p>
        </div>
        <div class="clear"></div>
        <dl>
          <dd class="clear"></dd>
          <dt>{body.heading1}</dt>
          <dd>
            <h2>{body.subTitle1}</h2>
            <p>
              <strong>{body.text3}</strong> {body.text4}
              <br />
            </p>
          </dd>
          <dd class="clear"></dd>
          <dt>{body.heading2}</dt>
          <dd>
            <h2>{body.subTitle2}</h2>
            <p>{body.text5}</p>
            <h2>{body.subTitle3}</h2>
            <p>{body.text6}</p>
          </dd>
          <dd class="clear"></dd>
          <dt>{body.heading3}</dt>
          <dd>
            <h2>
              {body.subTitle4}
              <span>{body.date1}</span>
            </h2>
            <ul>
              <li>{body.text7}</li>
              <li>{body.text8}</li>
            </ul>
            <h2>
              {body.subTitle5}
              <span>{body.date2}</span>
            </h2>
            <ul>
              <li>{body.text9}</li>
              <li>{body.text10}</li>
              <li>{body.text11}</li>
            </ul>
          </dd>
          <dd class="clear"></dd>
          <dt>{body.heading4}</dt>
          <dd>{body.text12}</dd>
          <dd class="clear"></dd>
          <dt>{body.heading5}</dt>
          <dd>{body.text13}</dd>
          <dd class="clear"></dd>
        </dl>
        <div class="clear"></div>
      </div>
    </body>
  );
};

export default Body;
