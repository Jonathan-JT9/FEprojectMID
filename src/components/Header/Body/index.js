import React from "react";

const Body = () => {
  return (
    <body>
      <div id="page-wrap">
        <img src="images/IMG_7242.png" alt="Photo of Cthulu" id="pic" />
        <div id="contact-info" class="vcard">
          <h1 class="fn">Jonathan Given Tambuku</h1>
          <p>
            Cell: <span class="tel">0895340109524</span>
            <br />
            Email:
            <a class="email" href="mailto:nathantambuku13@gmail.com">
              nathantambuku13@gmail.com
            </a>
          </p>
        </div>
        <div id="objective">
          <p>
            Saya adalah mahasiswa Fakultas Ilmu Komputer Jurusan Informatika di
            Universitas Klabat, saya memiliki minat dalam
          </p>
        </div>
        <div class="clear"></div>
        <dl>
          <dd class="clear"></dd>
          <dt>Education</dt>
          <dd>
            <h2>Universitas Klabat - Computer Science</h2>
            <p>
              <strong>Major:</strong> Informatics
              <br />
            </p>
          </dd>
          <dd class="clear"></dd>
          <dt>Skills</dt>
          <dd>
            <h2>Office skills</h2>
            <p>
              Office and records management, database administration, event
              organization, customer support, travel coordination
            </p>
            <h2>Computer skills</h2>
            <p>Visual Studio Code,Canva.</p>
          </dd>
          <dd class="clear"></dd>
          <dt>Experience</dt>
          <dd>
            <h2>
              Event Organizer
              <span>2023-2024</span>
            </h2>
            <ul>
              <li>Universitas Klabat 89th Graduation Exercise</li>
              <li>Universitas Klabat 90th Graduation Exercise</li>
            </ul>
            <h2>
              Advancement Unklab Team
              <span>2023-Now</span>
            </h2>
            <ul>
              <li>Cameraman</li>
              <li>Editor</li>
              <li>Photogarpher</li>
            </ul>
          </dd>
          <dd class="clear"></dd>
          <dt>Hobbies</dt>
          <dd>Basketball</dd>
          <dd class="clear"></dd>
          <dt>References</dt>
          <dd>Available on request</dd>
          <dd class="clear"></dd>
        </dl>
        <div class="clear"></div>
      </div>
    </body>
  );
};

export default Body;
