window.jsPDF = window.jspdf.jsPDF;

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

function switchTheme() {
  let body = document.body;
  let navContent = document.getElementById("nav-content");
  let tempMain = document.getElementById("templateMain");
  let labels = document.querySelectorAll(".template-container label");
  let inputs = document.querySelectorAll(".main input");
  let headings = document.querySelectorAll(".container h1");
  let span = document.getElementById("span");
  let textareas = document.querySelectorAll("textarea");
  let mains = document.getElementById("mains");

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
}

function getInputs() {
  let allReq = document.querySelectorAll("[required]");
  for (let i of allReq) {
    if (i.value == "") {
      alert("Please Fill in all required fields *");
      return;
    }
  }

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
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let hobbies = document.getElementById("hobbies");

    let tfname = document.getElementById("tfname");
    let tjob = document.getElementById("tjob");
    let tbday = document.getElementById("tbday");
    let tcontact = document.getElementById("tcontact");
    let temail = document.getElementById("temail");
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
    let tprojects = document.getElementById("tprojects");
    let tskills = document.getElementById("tskills");
    let thobbies = document.getElementById("thobbies");

    tfname.textContent = fname.value;
    tjob.textContent = job.value;
    tbday.textContent = bday.value;
    tcontact.textContent = contact.value;
    temail.textContent = email.value;
    toldCompany.textContent = oldCompany.value;
    toldjob.textContent = oldjob.value;
    tstartDate.textContent = startDate.value;
    tendDate.textContent = endDate.value;
    tjobdesc.textContent = jobdesc.value;
    ttellme.textContent = tellme.value;
    tschool.textContent = school.value;
    tcollege.textContent = college.value;
    ttenth.textContent = tenth.value;
    ttwelth.textContent = twelth.value;
    tcgpa.textContent = cgpa.value;
    tprojects.textContent = projects.value;
    tskills.textContent = skills.value;
    thobbies.textContent = hobbies.value;

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
  } else {
    return;
  }
}

function downloadPDF() {
  html2canvas(document.querySelector("#templateMain")).then((canvas) => {
    let base64image = canvas.toDataURL("image/png");
    console.log(base64image);

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
