window.jsPDF = window.jspdf.jsPDF;

$(document).ready(function () {
  window.jsPDF = window.jspdf.jsPDF;
  var maxField = 4; //Input fields increment limitation

  // Projects Adder Function

  var addButton = $(".add_button"); //Add button selector
  var wrapper = $("#allProjects"); //Input field wrapper
  var fieldHTML = `<div id="projectDiv" class="projectsDiv">
    <input
      class="darkInput"
      type="text"
      name="projects"
      id="projects"
      placeholder="Enter project title"
      required
    />
    <input
      class="darkInput"
      type="text"
      name="projectLang"
      id="projectLang"
      placeholder="Enter project language"
      required
    />
    <a class="remove_button darkLink">Del</a>
  </div>`; //New input field html

  var projectCounter = 1; //Initial field counter is 1
  $(addButton).click(function () {
    //Check maximum number of input fields
    if (projectCounter < maxField) {
      projectCounter++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function (e) {
    e.preventDefault();
    $(this).parent("div").remove(); //Remove field html
    projectCounter--; //Decrement field counter
  });

  //Skills Adder Function

  var skaddButton = $(".skadd_button"); //Add button selector
  var skwrapper = $("#allSkills"); //Input field wrapper
  var skfieldHTML = `<div id="skillDiv" class="skillsDiv">
  <input
    class="darkInput"
    type="text"
    name="skills"
    id="skills"
    placeholder="Enter your technical expertise (comma separated)"
    required
  />
  <a class="skremove_button darkLink">Del</a>
</div>`; //New input field html

  var skillsCounter = 1; //Initial field counter is 1
  $(skaddButton).click(function () {
    //Check maximum number of input fields
    if (skillsCounter < maxField) {
      skillsCounter++; //Increment field counter
      $(skwrapper).append(skfieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(skwrapper).on("click", ".skremove_button", function (e) {
    e.preventDefault();
    $(this).parent("div").remove(); //Remove field html
    skillsCounter--; //Decrement field counter
  });

  //Profiles adder function

  var profaddButton = $(".prof_add_button"); //Add button selector
  var profwrapper = $("#allProfiles"); //Input field wrapper
  var proffieldHTML = `<div id="profileDiv" class="profilesDiv">
  <input
    class="darkInput"
    type="text"
    name="profiles"
    id="profiles"
    placeholder="Enter platform"
    required
  />
  <input
    class="darkInput"
    type="text"
    name="profileLink"
    id="profileLink"
    placeholder="Enter link"
    required
  />
  <a class="prof_remove_button darkLink">Del</a>
</div>`; //New input field html

  var profileCounter = 1; //Initial field counter is 1
  $(profaddButton).click(function () {
    //Check maximum number of input fields
    if (profileCounter < maxField) {
      profileCounter++; //Increment field counter
      $(profwrapper).append(proffieldHTML); //Add field html
    }
  });
  //Once remove button is clicked
  $(profwrapper).on("click", ".prof_remove_button", function (e) {
    e.preventDefault();
    $(this).parent("div").remove(); //Remove field html
    profileCounter--; //Decrement field counter
  });
});

function previewFile() {
  var preview = document.getElementById("fimg");
  var file = document.querySelector("input[type=file]").files[0];
  var templateImg = document.getElementById("timg");
  var reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "assets/img/default.jpg";
  }

  reader.onloadend = function () {
    preview.src = reader.result;
    templateImg.src = reader.result;
  };
}

let theme = "dark";
let darkColor = "#33ffc1";
let lightColor = "#4589eb";
let color = darkColor;

function switchTheme() {
  if (theme == "dark") {
    theme = "light";
    color = lightColor;
  } else {
    theme = "dark";
    color = darkColor;
  }
  console.log(theme);

  let body = document.body;
  let navContent = document.getElementById("nav-content");
  let tempMain = document.getElementById("templateMain");
  let labels = document.querySelectorAll(".template-container label");
  let inputs = document.querySelectorAll(".main input");
  let headings = document.querySelectorAll("h1");
  let span = document.getElementById("span");
  let hobb = document.getElementById("thobbies");
  let textareas = document.querySelectorAll("textarea");
  let mains = document.getElementById("mains");
  let lists = document.querySelectorAll("ul");

  let splProfiles = document.querySelectorAll("#tProfiles > li > a");

  let main8as = document.querySelectorAll(".main-8 a");
  let main5as = document.querySelectorAll(".main-5 a");

  for (let splProfile of splProfiles) {
    splProfile.classList.toggle("darkList");
  }

  for (let main8a of main8as) {
    main8a.classList.toggle("darkLink");
  }

  for (let main5a of main5as) {
    main5a.classList.toggle("darkLink");
  }

  for (let list of lists) {
    list.classList.toggle("darkList");
  }

  for (let textarea of textareas) {
    textarea.classList.toggle("darkInput");
  }

  for (let input of inputs) {
    input.classList.toggle("darkInput");
  }

  for (let label of labels) {
    label.classList.toggle("darkLabel");
  }

  for (let heading of headings) {
    heading.classList.toggle("darkHeading");
  }

  body.classList.toggle("dark-body");
  navContent.classList.toggle("navDark");
  tempMain.classList.toggle("darkTemplate");
  span.classList.toggle("spanDark");
  mains.classList.toggle("darkMain");
  // hobb.classList.toggle("darklist");

  if (theme == "light") {
    hobb.style.color = "black";
  } else {
    hobb.style.color = "white";
  }
}

function getInputs() {
  // e.preventDefault();
  // console.log(e);

  var allReq = document.querySelectorAll("[required]");
  // for (var i of allReq) {
  //   i.style.border = "none";
  //   if (i.value == "") {
  //     alert("Please Fill in all required fields *");

  //     i.style.border = `1px solid #FC5858`;

  //     i.scrollIntoView({
  //       behavior: "auto",
  //       block: "center",
  //       inline: "center",
  //     });
  //     return;
  //   }
  // }

  if (confirm("Are you sure, you want to generate your resume ?")) {
    let gen = document.getElementById("generate");
    let template = document.querySelector(".template-container");
    template.classList.toggle("show-template");
    gen.style.pointerEvents = "none";
    gen.style.backgroundColor = "#222";

    // Actual Process

    let fname = document.getElementById("fname");
    let job = document.getElementById("job");
    let bday = document.getElementById("bday");
    let contact = document.getElementById("contact");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let oldCompany = document.getElementById("oldCompany");
    let oldjob = document.getElementById("oldjob");
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let jobdesc = document.getElementById("jobdesc");
    let tellme = document.getElementById("tellme");
    let school = document.getElementById("school");
    let college = document.getElementById("college");
    let tenth = document.getElementById("tenth");
    let twelth = document.getElementById("twelth");
    let cgpa = document.getElementById("cgpa");
    //
    let projects = document.querySelectorAll("#allProjects input");

    let skills = document.querySelectorAll("#allSkills input");
    //
    let profiles = document.querySelectorAll("#allProfiles input");
    //

    let hobbies = document.getElementById("hobbies");
    //
    //Template Contents
    //
    let tfname = document.getElementById("tfname");
    let tjob = document.getElementById("tjob");
    let tbday = document.getElementById("tbday");
    let tcontact = document.getElementById("tcontact");
    let temail = document.getElementById("temail");
    let taddress = document.getElementById("taddress");
    let toldCompany = document.getElementById("toldCompany");
    let toldjob = document.getElementById("toldjob");
    let tstartDate = document.getElementById("tstartDate");
    let tendDate = document.getElementById("tendDate");
    let tjobdesc = document.getElementById("tjobdesc");
    let ttellme = document.getElementById("ttellme");
    let tschool = document.getElementById("tschool");
    let tcollege = document.getElementById("tcollege");
    let ttenth = document.getElementById("ttenth");
    let ttwelth = document.getElementById("ttwelth");
    let tcgpa = document.getElementById("tcgpa");
    //
    var tprojects = $("#tprojects");

    if (projects[0].value) {
      for (let i = 0; i < projects.length; i += 2) {
        var projectContent = `<li>${projects[i].value} - ( ${
          projects[i + 1].value
        } )</li>`;
        console.log(projectContent);
        $(tprojects).append(projectContent);
      }
    } else {
      var hideableProjects = document.getElementById("hideableProjects");
      hideableProjects.style.display = "none";
    }
    //
    var tskills = $("#tskills");
    if (skills[0].value) {
      for (let i = 0; i < skills.length; i++) {
        var skillsContent = `<li>${skills[i].value}</li>`;
        console.log(skillsContent);
        $(tskills).append(skillsContent);
      }
    } else {
      var hideableSkills = document.getElementById("hideableSkills");
      hideableSkills.style.display = "none";
    }
    //
    var tProfiles = $("#tProfiles");
    if (profiles[0].value) {
      for (let i = 0; i < profiles.length; i += 2) {
        var profilesContent = `<li><a target='_blank' class='darkList' href='${
          profiles[i + 1].value
        }'>${profiles[i].value}</a></li>`;
        console.log(profilesContent);
        $(tProfiles).append(profilesContent);
      }
    } else {
      var hideableProfiles = document.getElementById("hideableProfiles");
      hideableProfiles.style.display = "none";
    }
    //
    // var thobbies = $("#thobbies");
    // if (hobbies[0].value) {
    //   for (let i = 0; i < hobbies.length; i++) {
    //     var hobbiesContent = `<li>${hobbies[i].value}</li>`;
    //     console.log(hobbiesContent);
    //     $(thobbies).append(hobbiesContent);
    //   }
    // } else {
    //   var hideableHobbies = document.getElementById("hideableHobbies");
    //   hideableHobbies.style.display = "none";
    // }
    tfname.textContent = fname.value;
    // console.log(tfname.textContent);
    tjob.textContent = job.value;
    // console.log(tjob.textContent);
    tbday.textContent = bday.value;
    // console.log(tbday.textContent);
    tcontact.textContent = contact.value;
    // console.log(tcontact.textContent);
    temail.textContent = email.value;
    // console.log(temail.textContent);
    taddress.textContent = address.value;
    // console.log(taddress.textContent);
    toldCompany.textContent = oldCompany.value;
    // console.log(toldCompany.textContent);
    toldjob.textContent = oldjob.value;
    // console.log(toldjob.textContent);
    tstartDate.textContent = startDate.value;
    // console.log(tstartDate.textContent);
    tendDate.textContent = endDate.value;
    // console.log(tendDate.textContent);
    tjobdesc.textContent = jobdesc.value;
    // console.log(tjobdesc.textContent);
    ttellme.textContent = tellme.value;
    // console.log(ttellme.textContent);
    tschool.textContent = school.value;
    // console.log(tschool.textContent);
    tcollege.textContent = college.value;
    // console.log(tcollege.textContent);
    ttenth.textContent = tenth.value;
    // console.log(ttenth.textContent);
    ttwelth.textContent = twelth.value;
    // console.log(ttwelth.textContent);
    tcgpa.textContent = cgpa.value;
    // console.log(tcgpa.textContent);

    // tprojects.textContent = projects.value;
    // tskills.textContent = skills.value;

    thobbies.textContent = hobbies.value;
    // console.log(thobbies.textContent);

    if (thobbies.textContent == "") {
      document.getElementById("hideableHobbies").style.display = "none";
    }
    // else {
    //   document.getElementById("hideableHobbies").style.display = "block";
    // }

    if (ttenth.textContent == "") {
      document.getElementById("hideableTenth").style.display = "none";
    }
    // else {
    //   document.getElementById("hideableTenth").style.display = "block";
    // }

    if (ttwelth.textContent == "") {
      document.getElementById("hideableTwelth").style.display = "none";
    }
    // else {
    //   document.getElementById("hideableTwelth").style.display = "block";
    // }
    if (tschool.textContent == "") {
      document.getElementById("hideableSchool").style.display = "none";
    }
    //
    //
    if (tcollege.textContent == "") {
      document.getElementById("hideableCollege").style.display = "none";
    }
    //
    //
    if (
      toldCompany.textContent == "" &&
      toldjob.textContent == "" &&
      tstartDate.textContent == "" &&
      tendDate.textContent == "" &&
      tjobdesc.textContent == ""
    ) {
      // console.log([
      //   toldCompany.textContent,
      //   toldjob.textContent,
      //   tstartDate.textContent,
      //   tendDate.textContent,
      //   tjobdesc.textContent,
      // ]);

      let prevHeading = document.getElementById("prevHeading");
      let prevMain2 = document.getElementById("prevMain-2");
      let prevMain3 = document.getElementById("prevMain-3");
      let prevMain4 = document.getElementById("prevMain-4");

      prevHeading.style.display = "none";
      prevMain2.style.display = "none";
      prevMain3.style.display = "none";
      prevMain4.style.display = "none";
    }
    document.getElementById("scrollTo").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  } else {
    return;
  }
}

function downloadPDF() {
  html2canvas(document.querySelector("#templateMain")).then((canvas) => {
    let base64image = canvas.toDataURL("image/png");
    // console.log(base64image);

    let pdf;

    if (
      toldCompany.textContent == "" &&
      toldjob.textContent == "" &&
      tstartDate.textContent == "" &&
      tendDate.textContent == "" &&
      tjobdesc.textContent == ""
    ) {
      pdf = new jsPDF("p", "px", [750, 700]); // 750 700
      pdf.addImage(base64image, "PNG", 15, 15, 669, 722); //669 722
    } else {
      pdf = new jsPDF("p", "px", [940, 700]); // 750 700
      pdf.addImage(base64image, "PNG", 15, 15, 669, 902); //669 722
    }

    pdf.save(tfname.textContent + "'s Resume" + ".pdf");
  });
}

// window.onload = () => {
//   var gen = document.getElementById("generate");
//   gen.addEventListener("click", function (e) {
//     e.preventDefault();
//     var template = document.querySelector(".template-container");
//     template.classList.toggle("show-template");
//     gen.style.pointerEvents = "none";
//     gen.style.backgroundColor = "#222";
//   });
// };
