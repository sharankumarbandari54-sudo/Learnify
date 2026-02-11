document.addEventListener("DOMContentLoaded",function(){
  const scheme=localStorage.getItem("scheme");
  const year=localStorage.getItem("year");
  const branch=localStorage.getItem("branch");
  const sem=localStorage.getItem("sem");
  document.getElementById("scheme").innerHTML=scheme;
  document.getElementById("year").innerHTML=year;
  document.getElementById("branch").innerHTML=branch;
  document.getElementById("sem").innerHTML=sem;
});
// === Step 1: Redirect from Subject Page ===
document.getElementById("python")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "PYTHON");
     window.location.href = "../Resources.html";
  });
  document.getElementById("net")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "NET");
   
    window.location.href = "../Resources.html";
 
  });
  document.getElementById("ime")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "IME");
 
    window.location.href = "../Resources.html";
   

  });
  
  document.getElementById("ai")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "AI");
     window.location.href = "../Resources.html";
  });
  document.getElementById("wd")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "WD");
     window.location.href = "../Resources.html";
  });
  //3 year civil 5th sem
  document.getElementById("cme")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "CME");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("rcs")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "RCS");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("wsse")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "WSSE");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("gbec")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "GBEC");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("sm")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "SM");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  //civil end
  //3 year ec 5th sem
  // ime common for all branches
  document.getElementById("ie")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "IE");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("dccn")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "DCCN");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("bvc")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "BVC");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("dcdvhdl")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "DCDVHDL");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  //ec end
  //3 year eee 5th sem
  // ime common for all branches
  document.getElementById("acmotors")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "ACMOTORS");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("pe")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "PE");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("esu")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "ESU");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("sp")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "SP");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  //eee end
  //3 year mechanical 5th sem
  // ime common for all branches
  document.getElementById("rac")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "RAC");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("cad")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "CAD");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("fps")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "FPS");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("ieec")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "IEEC");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  //eee end
  //3rd sem start
  document.getElementById("maths3")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "MATHS3");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("dsc")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "DSC");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("oops")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "OOPS");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("de")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "DE");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  document.getElementById("ca")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "CA");
    alert("as of now for this subject resources not availble. we will add soon !  ");
    //  window.location.href = "../Resources.html";
  });
  //3rd sem end
  // 4rth sem
  document.getElementById("maths4")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "MATHS");
     window.location.href = "../Resources.html";
   });
  document.getElementById("java")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "JAVA");
     window.location.href = "../Resources.html";
  });
  document.getElementById("os")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "OS");
     window.location.href = "../Resources.html";
  });
  document.getElementById("chn")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "CHN");
     window.location.href = "../Resources.html";
  });
  document.getElementById("rdbms")?.addEventListener("click", function () {
    localStorage.setItem("selectedSubject", "RDBMS");
     window.location.href = "../Resources.html";
  });
  
  // === Step 2: On Resources Page, Load Data ===
  window.addEventListener("DOMContentLoaded", function () {
    const subject = localStorage.getItem("selectedSubject");
    if (["PYTHON", "JAVA", "WD"].includes(subject)) {
      ["project1-link", "project2-link", "project3-link"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.innerText = "Click Here";
        }
      });
    }
    if (subject== "IME") {
      document.getElementById("project1-link").addEventListener("click",function(){
        alert("Handouts for this subject mid | sem not availble");
      });
    }
    // hiding project row for OS, CHN, AI, RDBMS, NET subjects
    if (subject== "OS" || subject== "CHN" || subject== "AI" || subject== "RDBMS" || subject == "NET"  ) {
      // Hide "Projects" header and all project cells
      const table = document.querySelector("table");
      if (table) {
        const headerCells = table.querySelectorAll("thead th");
        const rows = table.querySelectorAll("tbody tr");
  
        if (headerCells.length === 5) {
          headerCells[4].style.display = "none"; // Hide "Projects" column header
        }
  
        rows.forEach(row => {
          const cells = row.querySelectorAll("td");
          if (cells.length === 5) {
            cells[4].style.display = "none"; // Hide "Projects" column cell
          }
        });
      }
    }
    document.getElementById("sub_name").innerText=subject;
    if (!subject) return;
  
    const resourceFiles_5th = {
      PYTHON: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf", downloadName: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf", downloadName: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_Python_previous_year's_papers.pdf", downloadName: "Learnify_Python_previous_year's_papers.pdf" },
        //youtube links
        {id:"yt-mid1link", name:"mid2-link",link:"https://youtu.be/C3bOxcILGu4?si=JQ4Z5g5CBtb3UCOQ"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtu.be/4SO3sScshvA?si=FPp8S4ResUqwwwGf"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtu.be/dDuxsgPEe2U?si=PZAwL_nNht1JZezM"},
        //chapters
        // { id: "cmid1",  name: "SEM Notes",   file: "OS_5unit.pdf", downloadName: "net_sem_u5&6.pdf" },
        { id: "cmid2",  name: "SEM Notes",   file: "Learnify_PYTHON_3rd&4rth_Units.pdf", downloadName: "Learnify_PYTHON_3rd&4rth_Units.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_Python_5&6_units.pdf", downloadName: "Learnify_Python_5&6_units.pdf" },
        //projects
        {id:"project1-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/python-projects"},
        {id:"project2-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/python-projects"},
        {id:"project3-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/python-projects"}


      ],
   
      NET: [
        // .NET model paper
        { id: "mmid1", name: "QP", file: "Learnify_C21_nov_2024_.NET_question_papers.pdf", downloadName: "Learnify_net_question_paper.pdf" },
        { id: "mmid2", name: "QP", file: "Learnify_C21_nov_2024_.NET_question_papers.pdf", downloadName: "Learnify_net_question_paper.pdf" },
        { id: "msem",  name: "QP",   file: "Learnify_C21_nov_2024_.NET_question_papers.pdf", downloadName: "Learnify_sem_question_paper.pdf" },
        // Chapter pdf's
        { id: "cmid1", name: "MID-1 Notes", file: "Learnify_OS_5unit.pdf", downloadName: "Learnify_net_mid1_1&2.pdf" },
        { id: "cmid2", name: "MID-2 Notes", file: "Learnify_net_unit_3rd&4rth.pdf", downloadName: "Learnify_net_unit_3rd&4rth.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_Net_sem_units.pdf", downloadName: "Learnify_Net_sem_units.pdf" },
        { id: "view3",  name: "SEM Notes",   file: "Learnify_Net_sem_units.pdf", downloadName: "Learnify_Net_sem_units.pdf" },
        // Youtube links :
        {id:"yt-mid1link", name:"mid2-link",link:"https://youtube.com/playlist?list=PLVlQHNRLflP-jc5Fbhfdhzv52AWYq836j&si=T4axZtxEnOMNIHSs"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PLVlQHNRLflP-jc5Fbhfdhzv52AWYq836j&si=T4axZtxEnOMNIHSs"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PLVlQHNRLflP-jc5Fbhfdhzv52AWYq836j&si=T4axZtxEnOMNIHSs"},
        
      ],
     
      IME: [
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_C21_nov_2024_IME_question_papers.pdf", downloadName: "Learnify_mid1_ime_question_paper.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_C21_nov_2024_IME_question_papers.pdf", downloadName: "Learnify_mid2_ime_question_paper.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_C21_nov_2024_IME_question_papers.pdf", downloadName: "Learnify_ime_question_paper.pdf" },
           // Chapter pdf's
           { id: "cmid1", name: "MID-1 Notes", file: "Learnify_OS_5unit.pdf", downloadName: "Learnify_net_mid1_u1&2.pdf" },
           { id: "cmid2", name: "MID-2 Notes", file: "Learnify_IME_3rd&4rth_Unit.pdf", downloadName: "Learnify_IME_3rd&4rth_Unit.pdf" },
           { id: "csem",  name: "SEM Notes",   file: "Learnify_IME_5th&6th.pdf", downloadName: "Learnify_IME_5th&6th.pdf" },
           //Youtube link:
           {id:"yt-mid1link", name:"mid2-link",link:"https://youtube.com/playlist?list=PL0x1u9aMwXImXW1J5Z7wfH2uwQW9ZgK83&si=qQpbPk-lY28idHW0"},
           {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PL0x1u9aMwXImXW1J5Z7wfH2uwQW9ZgK83&si=qQpbPk-lY28idHW0"},
           {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PL0x1u9aMwXImXW1J5Z7wfH2uwQW9ZgK83&si=qQpbPk-lY28idHW0"},
           // open books
          //  { id: "project1-link", name: "MID-1 Notes", file: "OS_5unit.pdf", downloadName: "net_mid1_u1&2.pdf" },
           { id: "project2-link", name: "MID-2 Notes", file: "Learnify_IME_handout_c3.pdf", downloadName: "Learnify_IME_handout_c3.pdf" },
           { id: "project3-link",  name: "SEM Notes",   file: "Learnify_IME_handout_sem.pdf", downloadName: "Learnify_IME_handout_sem.pdf" },
        
      ],
      AI:[
        // model  papers
        { id: "mmid1", name: "QP", file: "Learnify_AI_mid1-model_paper.pdf", downloadName: "Learnify_AI_mid1.pdf" },
        { id: "mmid2", name: "QP", file: "Learnify_AI_mid2-model_paper.pdf", downloadName: "Learnify_AI_mid1.pdf" },
        { id: "msem", name: "QP", file: "Learnify_AI_sem_model_papers.pdf", downloadName: "Learnify_AI_mid1.pdf" },
           // Chapter pdf's
           { id: "cmid1", name: "MID-1 Notes", file: "Learnify_OS_5unit.pdf", downloadName: "Learnify_net_mid1_u1&2.pdf" },
           { id: "cmid2", name: "MID-2 Notes", file: "Learnify_AI_3rd&4rth_Units.pdf", downloadName: "Learnify_AI_3rd&4rth_Units.pdf" },
           { id: "csem",  name: "SEM Notes",   file: "Learnify_AI_5&6th_Units.pdf", downloadName: "Learnify_AI_5&6_Unis.pdf" },
           //Youtube links:https://youtu.be/491lzKe8arg?si=LvCVxEhjOX7h8MHp
           {id:"yt-mid1link", name:"mid2-link",link:"https://youtu.be/491lzKe8arg?si=LvCVxEhjOX7h8MHp"},
           {id:"yt-mid2link", name:"mid2-link",link:"https://youtu.be/491lzKe8arg?si=LvCVxEhjOX7h8MHp"},
           {id:"yt-semlink", name:"sem-link",link:"https://youtu.be/491lzKe8arg?si=LvCVxEhjOX7h8MHp"},
     
      ],
      WD:[
        // model  papers
        { id: "mmid1", name: "QP", file: "Learnify_C21_nov_2024_WD_question_papers.pdf", downloadName: "Learnify_WD_mid1.pdf" },
        { id: "mmid2", name: "QP", file: "Learnify_C21_nov_2024_WD_question_papers.pdf", downloadName: "Learnify_WD_mid2.pdf" },
        { id: "msem", name: "QP", file: "Learnify_C21_nov_2024_WD_question_papers.pdf", downloadName: "Learnify_WD_sem.pdf" },
         // Chapter pdf's
         { id: "cmid1", name: "MID-1 Notes", file: "Learnify_OS_5unit.pdf", downloadName: "Learnify_net_mid1_u1&2.pdf" },
         { id: "cmid2", name: "MID-2 Notes", file: "Learnify_WD_3rd&4rth.pdf", downloadName: "Learnify_WD_3rd&4rth.pdf" },
         { id: "csem",  name: "SEM Notes",   file: "Learnify_WD_5&6th_Units.pdf", downloadName: "Learnify_WD_sem_u5&6.pdf" },
         // youtube links:
         {id:"yt-mid1link", name:"mid2-link",link:"https://youtu.be/lGKGDxwvrEQ?si=-dE4_UwnK-MPZI6C"},
         {id:"yt-mid2link", name:"mid2-link",link:"https://youtu.be/hxbWGFI4xI4?si=bk94E3y_vuaay0ze"},
         {id:"yt-semlink", name:"sem-link",link:"https://youtu.be/QDSy0nGAl3A?si=5ORBPPeZjIxaoCCL"},
         //project links:
         {id:"project1-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/basic_calculator"},
        {id:"project2-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/Tic_Tac_Toe"},
        {id:"project3-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/Memory_Card_game"}
      ]
      // Add other subjects similarly...
    };
    const resourceFiles_4rth={
      MATHS: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf", downloadName: "Learnify_python_mid1_question_paper.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf", downloadName: "Learnify_python_mid2_question_paper.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_C21_nov_2024_PYTHON_question_papers.pdf", downloadName: "Learnify_python_sem_question_paper.pdf" },
        //youtube links
       
        {id:"yt-mid1link", name:"mid1-link",link:" https://youtube.com/playlist?list=PLI_-Bu5FU44ZpMYJXGv2blAbj-ykjYqUZ&si=d9JeskmP4bsepqqW"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtu.be/bmX0mduji_I?si=lyFF0X7cN5H5AHXw"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtu.be/JKteP9AiW38?si=uHZT68N_wwFr-U-D"},
        //chapters
        { id: "cmid1",  name: "SEM Notes",   file: "Learnify_Maths_unit_1&2.pdf", downloadName: "Learnify_Maths_unit_1&2.pdf" },
        { id: "cmid2",  name: "SEM Notes",   file: "Learnify_Maths_unit_3&4.pdf", downloadName: "Learnify_MATHS_3rd&4rth_Units.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_MATHS_5th&6th_Units.pdf", downloadName: "Learnify_MATHS_5th&6th_Units.pdf" },
        // open book system
        { id: "project1-link", name: "MID-1 Notes", file: "Learnify_M4_Handout.pdf", downloadName: "Learnify_M4_Handout.pdf" },
        { id: "project2-link", name: "MID-2 Notes", file: "Learnify_M4_Handout.pdf", downloadName: "Learnify_M4_Handout.pdf" },
        { id: "project3-link",  name: "SEM Notes",   file: "Learnify_M4_Handout.pdf", downloadName: "Learnify_M4_Handout.pdf" },
      ],
      OS: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_OS_Model_Papers.pdf", downloadName: "Learnify_OS_Model_Papers.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_OS_Model_Papers.pdf", downloadName: "Learnify_OS_Model_Papers.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_OS_Model_Papers.pdf", downloadName: "Learnify_OS_Model_Papers.pdf" },
        //youtube links
        {id:"yt-mid1link", name:"mid1-link",link:" https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        //chapters
        { id: "cmid1",  name: "MID-1 Notes",   file: "Learnify_OS_1st&2nd_Units.pdf", downloadName: "Learnify_OS_1st&2nd_Units.pdf" },
        { id: "cmid2",  name: "MID-2 Notes",   file: "Learnify_OS_unit_3rd&4rth.pdf", downloadName: "Learnify_OS_unit_3rd&4rth.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_OS_1st_2nd_5th&6th_units.pdf", downloadName: "Learnify_OS_1st_2nd_5th & 6th_units.pdf" },
      ],
      JAVA: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_java_mid1_model_paper.pdf", downloadName: "Learnify_java_mid1_model_paper.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_java_mid2_model_paper.pdf", downloadName: "Learnify_java_mid2_model_paper.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_java_sem_model_paper.pdf", downloadName: "Learnify_java_sem_model_paper.pdf" },
        //youtube links
       
        {id:"yt-mid1link", name:"mid1-link",link:" https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PLXj4XH7LcRfDrdQuJTHIPmKMpa7eYVaPm&si=7APssB6g6_Afg8p5"},
        //chapters
        { id: "cmid1",  name: "MID-1 Notes",   file: "Learnify_Java_1st_2nd_units.pdf", downloadName: "Learnify_Java_1st&2nd_units.pdf" },
        { id: "cmid2",  name: "MID-2 Notes",   file: "Learnify_Java_units_3rd&4rth.pdf", downloadName: "Learnify_Java_units_3rd&4rth.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_Java_units_5th&6th.pdf", downloadName: "Learnify_Java_units_5th&6th.pdf" },
        //projects
        {id:"project1-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/Java-project-"},
        {id:"project2-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/Java-project-"},
        {id:"project3-link",name:"project-link",link:"https://github.com/Yuvaraj-kurri3/Java-project-"}

      ],
      CHN: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_Chn_mid_1_model_paper.pdf", downloadName: "Learnify_Chn_mid_1_model_paper.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_Chn_mid_2_model_paper.pdf", downloadName: "Learnify_Chn_mid_2_model_paper.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_Chn_sem_model_paper.pdf", downloadName: "Learnify_Chn_sem_model_paper.pdf" },
        //youtube links
       
        {id:"yt-mid1link", name:"mid1-link",link:" https://youtube.com/playlist?list=PL0JZB-buuP3mgBuqTvN4kIWlCCL_1kozQ&si=pcjahQjphDZCkiOc"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PL0JZB-buuP3mgBuqTvN4kIWlCCL_1kozQ&si=pcjahQjphDZCkiOc"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PL0JZB-buuP3mgBuqTvN4kIWlCCL_1kozQ&si=pcjahQjphDZCkiOc"},
        //chapters
        { id: "cmid1",  name: "MID-1 Notes",   file: "Learnify_CHN_1st&2nd_units.pdf", downloadName: "Learnify_CHN_1st&2nd_units.pdf" },
        { id: "cmid2",  name: "MID-2 Notes",   file: "Learnify_CHN_3rd&4rth_units.pdf", downloadName: "Learnify_CHN_3rd&4rth_units.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_CHN_5th&6th_units.pdf", downloadName: "Learnify_CHN_5th&6th_units.pdf" },
      ],
      // 
    RDBMS: [
        //model papers
        { id: "mmid1", name: "MID-1 Notes", file: "Learnify_RDBMS_MID1_PAPER.pdf", downloadName: "Learnify_RDBMS_MID1_MODEL_PAPER.pdf" },
        { id: "mmid2", name: "MID-2 Notes", file: "Learnify_RDBMS_MID2_MODEL.pdf", downloadName: "Learnify_RDBMS_MID2_PAPER.pdf" },
        { id: "msem",  name: "SEM Notes",   file: "Learnify_RDBMS_SEM_MODEL_PAPERS.pdf", downloadName: "Learnify_RDBMS_SEM_MODEL_PAPERS.pdf" },
        //youtube links
       
        {id:"yt-mid1link", name:"mid1-link",link:" https://youtube.com/playlist?list=PLNgoFk5SYUglZcdqsboTOOy4SoUXNOs_D&si=-2VqSuXCQEmR_ZZi"},
        {id:"yt-mid2link", name:"mid2-link",link:"https://youtube.com/playlist?list=PLNgoFk5SYUglZcdqsboTOOy4SoUXNOs_D&si=-2VqSuXCQEmR_ZZi"},
        {id:"yt-semlink", name:"sem-link",link:"https://youtube.com/playlist?list=PLNgoFk5SYUglZcdqsboTOOy4SoUXNOs_D&si=-2VqSuXCQEmR_ZZi"},
        //chapters
        { id: "cmid1",  name: "MID-1 Notes",   file: "Learnify_RDBMS_1st&2nd_unit.pdf", downloadName: "Learnify_RDBMS_1st&2nd_unit.pdf" },
        { id: "cmid2",  name: "MID-2 Notes",   file: "Learnify_RDBMS_3rd&4rth_units.pdf", downloadName: "Learnify_RDBMS_3rd&4rth_units.pdf" },
        { id: "csem",  name: "SEM Notes",   file: "Learnify_RDBMS_5th&6th_units.pdf", downloadName: "Learnify_RDBMS_5th&6th_units.pdf" },
      ],

    }
    console.log(subject);
    const files = resourceFiles_5th[subject] || resourceFiles_4rth[subject];
    if (!files) return;
  
    files.forEach(resource => {
      const element = document.getElementById(resource.id);
     
      if (!element) return;
    
      // If it's a YouTube link
      if (resource.link) {
        element.href = resource.link;
        element.removeAttribute("download");
      } 
      // If it's a file to be downloaded
      else if (resource.file) {
         element.href = `files/${resource.file}`;
          element.setAttribute("download", resource.downloadName);
       
      }
    });
    // changed project row to open books for IME subject
    if (subject === "IME") {
      const p1=document.getElementById("project1-link");
      const v1=document.getElementById("p1");
       const table = document.querySelector("table");
      const headerCells = table?.querySelectorAll("thead th");
      if (headerCells && headerCells.length >= 5) {
        headerCells[4].innerText = "Open Books";
      }
      p1.innerText = "Not Available";
      p1.style.pointerEvents = "none";
      p1.style.backgroundColor = "#ccc"; // greyed out
      p1.style.color = "#666";
      p1.title = "This Project is not available";
      v1.style.display="none";
      
    }
    //hiding 1st&2nd chapters for this subjects
    if(subject==="PYTHON"|| subject==="IME"||subject==="NET"||subject=="WD" || subject==="AI"){


      const cmid1 = document.getElementById("cmid1");
      const v1= document.getElementById("v1");
  if (cmid1) {
    if (cmid1) {
      // Example: Mark the button as not available
      cmid1.innerText = "Not Available";
      cmid1.style.pointerEvents = "none";
      cmid1.style.backgroundColor = "#ccc"; // greyed out
      cmid1.style.color = "#666";
      cmid1.title = "This Chapter PDF is not available";
      v1.innerText = "Not Available";
      v1.style.pointerEvents = "none";
      v1.style.fontSize = "12px";
      v1.style.backgroundColor = "#ccc"; // greyed out
      v1.style.color = "#666";
      v1.title = "This Chapter PDF is not available";

    }
  }
    }
    //removing view button for this subjects
    if(subject=="WD" || subject=="PYTHON" || subject=="JAVA"){
      const p1=document.getElementById("p1");
      const p2=document.getElementById("p2");
      const p3=document.getElementById("p3");
      p1.style.display="none";
      p3.style.display="none";
      p2.style.display="none";  

    }
    if(subject=="NET"){
      document.getElementById("sub_name").innerHTML=".NET";
      const cmid2 = document.getElementById("cmid2");
      const v1= document.getElementById("v1");
      const v2= document.getElementById("v2");
   
  // if (cmid2) {
  //   if (cmid2) {
  //     // Example: Mark the button as not available
  //     cmid2.innerText = "Not Available";
  //     cmid2.style.pointerEvents = "none";
  //     cmid2.style.backgroundColor = "#ccc"; // greyed out
  //     cmid2.style.color = "#666";
  //     cmid2.title = "This Chapter PDF is not available";
  //     v1.innerText = "Not Available";
  //     v1.style.pointerEvents = "none";
  //     v1.style.fontSize = "12px";
  //     v1.style.backgroundColor = "#ccc"; // greyed out
  //     v1.style.color = "#666";
  //     v1.title = "This Chapter PDF is not available";
  //     v2.innerText = "Not Available";
  //     v2.style.pointerEvents = "none";
  //     v2.style.backgroundColor = "#ccc"; // greyed out
  //     v2.style.color = "#666";
  //     v2.title = "This Chapter PDF is not available";
  //     v2.style.fontSize = "12px"; 



  //   }
  // }
    }
    if(subject=="MATHS"){
      document.getElementById("Projects").innerHTML="Open Books";
      const m1=document.getElementById("mmid1");
      const m2=document.getElementById("mmid2");
      const m3=document.getElementById("msem");
      const model1= document.getElementById("m1");
      const model2= document.getElementById("m2");
      const model3= document.getElementById("m3");

      m1.innerText = "Not Available";
      m1.style.pointerEvents = "none";
      m1.style.backgroundColor = "#ccc"; // greyed out
      m1.style.color = "#666";
      m1.title = "This Model Papers is not available";
      m2.innerText = "Not Available";
      m2.style.pointerEvents = "none";
      m2.style.backgroundColor = "#ccc"; // greyed out
      m2.style.color = "#666";
      m2.title = "This Model Papers is not available";
      m3.innerText = "Not Available";
      m3.style.pointerEvents = "none";
      m3.style.backgroundColor = "#ccc"; // greyed out
      m3.style.color = "#666";
      m3.title = "This Model Papers is not available";
      model1.style.display="none";
      model2.style.display="none";
      model3.style.display="none";

    }
  });
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
  });    
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
 

  function gotoabout(){
    window.location.href="/about.html";
  }
  if (window.innerWidth <= 480) {
    alert("View Button Not Work In Mobile , please use Laptop or Desktop.");
   }
  // feedback form
  document.addEventListener("DOMContentLoaded", function() {
    
  
    document.getElementById("feedback").addEventListener("click", function() {
      document.querySelector(".feedback").style.display = "block";
    }); 
   
  });
  const form = document.getElementById('register-form');
  const result = document.getElementById("message");

  // Roll Number Format Validation
  function validateRollNumberFormat(rollNumber) {
      const pattern = /^[0-9]{5}-cs-[0-9]{3}$/i;
      return pattern.test(rollNumber);
  }

  // Fetch Valid Roll Numbers and Check
  async function isValidRollNumber(rollNumber) {
      try {
          const response = await fetch('rollnumbers.json'); // Make sure this file exists
          const validRollNumbers = await response.json();
          return validRollNumbers.includes(rollNumber.toLowerCase()); // case insensitive
      } catch (error) {
          console.error("Error loading rollnumbers.json:", error);
          return false;
      }
  }

  form.addEventListener('submit', async function(e) {
      e.preventDefault();

       const roll = document.getElementById('feedbackroll').value.trim().toLowerCase();
       

      // First: Validate Roll Number Format
      if (!validateRollNumberFormat(roll)) {
          alert("Invalid Roll Number Format! Enter Your Roll Number in the format: 22290-cs-000(000-exmaple)"); 
          return;
      }

      // Second: Check Roll Number Exists
      const rollExists = await isValidRollNumber(roll);
      if (!rollExists) {
          alert("Roll Number not found! Please enter correct one.");
          return;
      }

      // If all OK, proceed to submit
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      result.innerHTML = "Please wait..";

      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = json.message;
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });

       
  
  
   
  
  });
  window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
      document.querySelector(".feedback").style.display = "none";
    });
  });
  
  //feedback form end
  //pdf viewer
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.view-btn').forEach(button => {
      button.addEventListener('click', function () {
        const fileId = button.getAttribute('data-file-id');
        const fileElement = document.getElementById(fileId);
        if (fileElement && fileElement.href) {
            // If desktop, show in modal
            const pdfFrame = document.getElementById('pdf-frame');
            pdfFrame.src = fileElement.href;
            document.getElementById('pdf-modal').style.display = 'flex';
          
        }
      });
    });
  
    document.getElementById('close-pdf').addEventListener('click', function () {
      document.getElementById('pdf-modal').style.display = 'none';
      document.getElementById('pdf-frame').src = '';
    });
  });
