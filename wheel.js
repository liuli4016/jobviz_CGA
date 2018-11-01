var csvdata;
var jobdsp = [];         
var stopWords = [];


var datatitleDiv = document.getElementById("DataTitle");	  
datatitleDiv.style.position = "absolute";
datatitleDiv.style.left = 250;
datatitleDiv.style.top = 6;  


$.searchterm1 = function(majors) 
{    
  $( "#tags1" ).autocomplete({
      source: majors
   });
};


d3.csv("stopwords.csv", function(csv) 
{ 
	 for (var i=0; i<csv.length; i++)
   {
       var thisWord = csv[i].information; 
       stopWords.push(thisWord);	   
   }
});
            
                   

d3.text("Career_snip_csv.csv", function (unparsedData) 
{
         csvdata = d3.csv.parseRows(unparsedData);                                                    
                                               
         var dataorder = [];                                          
         var category = [];
         category[0] = csvdata[1][6];
         dataorder[0] = [];                                                                                         
                                              
         for (var scan = 0; scan < jsonfilename1; scan++) 
         {           
             var jobfunct = csvdata[scan + 1][6];        //data[xx][6] is job category   
                                                   
             var commaplace = csvdata[scan + 1][6].indexOf(",");
             var secondlast = jobfunct.substring(commaplace-1, commaplace);                                               

             var jobcategory;
                                                   
             if (commaplace<0)
                jobcategory = jobfunct;
             
             else
             {
                if (secondlast==" ")
                   jobcategory = jobfunct.substring(0, commaplace-1); 
                   
                else                                                
                   jobcategory = jobfunct.substring(0, commaplace);
             }
                                                   
             var contained = 0;
             
             for (var i = 0; i < category.length; i++)
             {
                 if (jobcategory == category[i].substring(0, jobcategory.length))
                 {
                    dataorder[i].push(scan+1);                                                   	   	              
                    csvdata[scan + 1][6] = jobcategory;
                    contained = 1;                                               	      
                 }                                               	 
             }                                                  
                                                   
             if (contained == 0)
             {
                var len = category.length;
                category[len] = jobfunct;
                dataorder[len] = [];
                dataorder[len].push(scan+1);
                csvdata[scan + 1][6] = jobcategory;
             }                                                                                                                          
         } 
                                               
                                               
         var num1 = 0;
                                               
         for (var i = 0; i < dataorder.length; i++)
         {
             for (var j = 0; j < dataorder[i].length; j++)
             {
                 var thisindex = dataorder[i][j];
                 jobdsp[num1] = csvdata[thisindex][0];
                 
                
                 
                 //jobdsp[num1].replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '') ;
                 
                 num1++;
             }                                           	
         }                                                                                                                                        
}); 





var majorlist = [    
"Art@School of Arts and Sciences(SAS)",
"Art History - Liberal Arts@School of Arts and Sciences(SAS)",
"Astrophysics@School of Arts and Sciences(SAS)",
"Biomathematics@School of Arts and Sciences(SAS)",
"Cell & Developmental Biology@School of Arts and Sciences(SAS)",
"Cell Biology & Neuroscience@School of Arts and Sciences(SAS)",
"Chemistry@School of Arts and Sciences(SAS)",
"Chinese@School of Arts and Sciences(SAS)",
"Classics@School of Arts and Sciences(SAS)",
"Comparative Literature@School of Arts and Sciences(SAS)",
"Computer Science@School of Arts and Sciences(SAS)",
"Criminal Justice@School of Arts and Sciences(SAS)",
"East Asian Language and Cultures@School of Arts and Sciences(SAS)",
"East Asian Languages and Area Studies@School of Arts and Sciences(SAS)",
"Economics@School of Arts and Sciences(SAS)",
"English@School of Arts and Sciences(SAS)",
"African Languages & Literature@School of Arts and Sciences(SAS)",
"Africana Studies@School of Arts and Sciences(SAS)",
"American Studies@School of Arts and Sciences(SAS)",
"Anthropology@School of Arts and Sciences(SAS)",
"Applied Mathematics@School of Arts and Sciences(SAS)",
"European Studies@School of Arts and Sciences(SAS)",
"Exercise Science and Sport Studies@School of Arts and Sciences(SAS)",
"French@School of Arts and Sciences(SAS)",
"Genetics@School of Arts and Sciences(SAS)",
"Geography@School of Arts and Sciences(SAS)",
"Geological Sciences@School of Arts and Sciences(SAS)",
"German@School of Arts and Sciences(SAS)",
"History@School of Arts and Sciences(SAS)",
"History and Political Science@School of Arts and Sciences(SAS)",
"Italian@School of Arts and Sciences(SAS)",
"Jewish Studies@School of Arts and Sciences(SAS)",
"Latin American Civilization Studies@School of Arts and Sciences(SAS)",
"Latino and Hispanic Caribbean Studies@School of Arts and Sciences(SAS)",
"Linguistics@School of Arts and Sciences(SAS)",
"Mathematics@School of Arts and Sciences(SAS)",
"Medical Technology@School of Arts and Sciences(SAS)",
"Medieval Studies@School of Arts and Sciences(SAS)",
"Middle Eastern Studies@School of Arts and Sciences(SAS)",
"Molecular Biology & Biochemistry@School of Arts and Sciences(SAS)",
"Philosophy@School of Arts and Sciences(SAS)",
"Physics and Astronomy@School of Arts and Sciences(SAS)",
"Political Science@School of Arts and Sciences(SAS)",
"Portugese@School of Arts and Sciences(SAS)",
"Psychology@School of Arts and Sciences(SAS)",
"Public Policy@School of Arts and Sciences(SAS)",
"Religion@School of Arts and Sciences(SAS)",
"Russian@School of Arts and Sciences(SAS)",
"Sociology@School of Arts and Sciences(SAS)",
"Spanish@School of Arts and Sciences(SAS)",
"Statistics@School of Arts and Sciences(SAS)",
"Visual Arts@School of Arts and Sciences(MGSA)",
"Women's & Gender Studies@School of Arts and Sciences(SAS)",
"Agricultural and Food Systems@School of Environmental and Biological Sciences(SEBS)",
"Animal Sciences@School of Environmental and Biological Sciences(SEBS)",
"Biochemistry@School of Environmental and Biological Sciences(SEBS)",
"Biological Sciences@School of Environmental and Biological Sciences(SEBS)",
"Biology@School of Environmental and Biological Sciences(SEBS)",
"Biotechnology@School of Environmental and Biological Sciences(SEBS)",
"Ecology@School of Environmental and Biological Sciences(SEBS)",
"Ecology and Evolution@School of Environmental and Biological Sciences(SEBS)",
"Ecology and Natural Resources@School of Environmental and Biological Sciences(SEBS)",
"Entomology@School of Environmental and Biological Sciences(SEBS)",
"Environmental & Business Economics@School of Environmental and Biological Sciences(SEBS)",
"Environmental Planning & Design@School of Environmental and Biological Sciences(SEBS)",
"Environmental Policy@School of Environmental and Biological Sciences(SEBS)",
"Environmental Sciences@School of Environmental and Biological Sciences(SEBS)",
"Food Science@School of Environmental and Biological Sciences(SEBS)",
"Landscape Architecture@School of Environmental and Biological Sciences(SEBS)",
"Marine Sciences@School of Environmental and Biological Sciences(SEBS)",
"Metereology@School of Environmental and Biological Sciences(SEBS)",
"Microbiology@School of Environmental and Biological Sciences(SEBS)",
"Nutrition@School of Environmental and Biological Sciences(SEBS)",
"Nutritional Sciences@School of Environmental and Biological Sciences(SEBS)",
"Oceanography@School of Environmental and Biological Sciences(SEBS)",
"Plant Biology@School of Environmental and Biological Sciences(SEBS)",
"Dance@Mason Gross School of the Arts(MGSA)",
"Dance Education@Mason Gross School of the Arts(MGSA)",
"Design of Learning Environments@Mason Gross School of the Arts(MGSA)",
"Music@Mason Gross School of the Arts(MGSA)",
"Theater Arts@Mason Gross School of the Arts(MGSA)",
"Pharmaceutical Science@Ernest Mario School of Pharmacy(EMSP)",
"Pharmacology Cellular and Molecular@Ernest Mario School of Pharmacy(EMSP)",
"Accounting@Rutgers Business School(RBS)",
"Business Analytics and Information Technology@Rutgers Business School(RBS)",
"Business@Rutgers Business School(RBS)",
"Supply Chain and Marketing Science@Rutgers Business School(RBS)",
"Finance@Rutgers Business School(RBS)",
"Financial and Risk Mgmt@Rutgers Business School(RBS)",
"Management@Rutgers Business School(RBS)",
"Marketing@Rutgers Business School(RBS)",
"Communication@School of Communication and Information(SCI)",
"Communication and Information Studies@School of Communication and Information(SCI)",
"Information Technology and Informatics@School of Communication and Information(SCI)",
"Journalism@School of Communication and Information(SCI)",
"Journalism and Media Studies@School of Communication and Information(SCI)",
"Applied Sciences in Engineering@School of Engineering(SOE)",
"Bioenvironmental Engineering@School of Engineering(SOE)",
"Biomedical Engineering@School of Engineering(SOE)",
"Chemical Engineering@School of Engineering(SOE)",
"Civil & Environmental Engineering@School of Engineering(SOE)",
"Electrical & Computer Engineering@School of Engineering(SOE)",
"Industrial and Systems Engineering@School of Engineering(SOE)",
"Materials Science and Engineering@School of Engineering(SOE)",
"Mechanical Engineering@School of Engineering(SOE)",
"Planning and Public Policy@Edward J. Bloustein School of Planning and Public Policy(EBSPPP)",
"Public Health@Edward J. Bloustein School of Planning and Public Policy(EBSPPP)",
"Urban Planning & Policy Development@Edward J. Bloustein School of Planning and Public Policy(EBSPPP)",
"Human Resource Management@School of Management and Labor Relations(SMLR)",
"Labor Studies and Employment Relations@School of Management and Labor Relations(SMLR)",
"Labor and Employment Relations@School of Management and Labor Relations(SMLR)",
"Social Studies Education@School of Social Work(SSW)",
"Social Work@School of Social Work(SSW)",
"Admin and Supervision of Education@Other(Other Majors)",
"Adult and Continuing Education@Other(Other Majors)",
"Agricultural Economics@Other(Other Majors)",
"Agricultural Science@Other(Other Majors)",
"All Majors@Other(Other Majors)", 
"Atmospheric Science@Other(Other Majors)",
"Clinical Psychology@Other(Other Majors)",
"Computational Biology & Molecular Biophysics@Other(Other Majors)",
"Counseling Psychology@Other(Other Majors)",
"Education@Other(Other Majors)",
"Education Culture and Society@Other(Other Majors)",
"Educational Leadership@Other(Other Majors)",
"Educational Statistics and Measurements@Other(Other Majors)",
"Endocrinology and Animal Biosciences@Other(Other Majors)",
"Evolution and Natural Resources@Other(Other Majors)",
"Food and Business Economics@Other(Other Majors)",
"Institutions and Behavior@Other(Other Majors)", 
"Language Education@Other(Other Majors)",
"Learning Cognition and Development@Other(Other Majors)",
"Library and Information Studies@Other(Other Majors)",
"Literacy Education@Other(Other Majors)",
"Mathematical Finance@Other(Other Majors)",
"Mathematics Education@Other(Other Majors)",
"Medicinal Chemistry@Other(Other Majors)",
"Neuroscience@Other(Other Majors)",
"Operations Research@Other(Other Majors)",
"Organizational Psychology@Other(Other Majors)",
"Physiology and Integrative Biology@Other(Other Majors)",
"Plant Science@Other(Other Majors)",
"Public Administration@Other(Other Majors)",
"Quantitative Finance@Other(Other Majors)",
"Reading Education@Other(Other Majors)",
"Reading Recovery@Other(Other Majors)",
"Religious Studies@Other(Other Majors)",
"School Psychology@Other(Other Majors)",
"Science Education@Other(Other Majors)",
"Special Education@Other(Other Majors)",
"Teacher Leadership@Other(Other Majors)",
"Toxicology@Other(Other Majors)",
    ];
    
    
    
var majorlist2 = [    
"Agricultural Economics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Agricultural Science@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Agricultural and Food Systems@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Animal Sciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Biochemistry@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Biological Sciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Biology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Biomathematics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Biotechnology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Cell & Developmental Biology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Cell Biology & Neuroscience@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Computational Biology & Molecular Biophysics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Ecology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Ecology and Evolution@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Ecology and Natural Resources@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Endocrinology and Animal Biosciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Entomology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Environmental & Business Economics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Environmental Planning & Design@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Environmental Policy@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Environmental Sciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Food Science@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Food and Business Economics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Landscape Architecture@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Marine Sciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Metereology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Microbiology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Molecular Biology & Biochemistry@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Nutrition@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Nutritional Sciences@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Oceanography@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Physiology and Integrative Biology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Plant Biology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Plant Science@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Genetics@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Medical Technology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Medicinal Chemistry@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Neuroscience@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Pharmaceutical Science@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Pharmacology Cellular and Molecular@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Toxicology@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Evolution and Natural Resources@Biological Agricultural and Environmental Sciences Majors(Bio, Agri & Env Majors)",
"Astrophysics@Physical Science Majors(Physical Science Majors)",
"Physics and Astronomy@Physical Science Majors(Physical Science Majors)",
"Atmospheric Science@Physical Science Majors(Physical Science Majors)",
"Chemistry@Physical Science Majors(Physical Science Majors)",
"Geological Sciences@Physical Science Majors(Physical Science Majors)",
"Applied Mathematics@Computer Mathematics and Statistics Majors(Comp, Math & Stats Majors)",
"Computer Science@Computer Mathematics and Statistics Majors(Comp, Math & Stats Majors)",
"Mathematical Finance@Computer Mathematics and Statistics Majors(Comp, Math & Stats Majors)",
"Mathematics@Computer Mathematics and Statistics Majors(Comp, Math & Stats Majors)",
"Statistics@Computer Mathematics and Statistics Majors(Comp, Math & Stats Majors)",
"Applied Sciences in Engineering@Engineering Majors(Engineering Majors)",
"Bioenvironmental Engineering@Engineering Majors(Engineering Majors)",
"Biomedical Engineering@Engineering Majors(Engineering Majors)",
"Chemical Engineering@Engineering Majors(Engineering Majors)",
"Civil & Environmental Engineering@Engineering Majors(Engineering Majors)",
"Electrical & Computer Engineering@Engineering Majors(Engineering Majors)",
"Industrial and Systems Engineering@Engineering Majors(Engineering Majors)",
"Materials Science and Engineering@Engineering Majors(Engineering Majors)",
"Mechanical Engineering@Engineering Majors(Engineering Majors)",
"Accounting@Business Majors(Business Majors)",
"Business Analytics and Information Technology@Business Majors(Business Majors)",
"Finance@Business Majors(Business Majors)",
"Financial and Risk Mgmt@Business Majors(Business Majors)",
"Management@Business Majors(Business Majors)",
"Marketing@Business Majors(Business Majors)",
"Supply Chain and Marketing Science@Business Majors(Business Majors)",
"Quantitative Finance@Business Majors(Business Majors)",
"Business@Business Majors(Business Majors)",
"Operations Research@Business Majors(Business Majors)",
"Communication@Communications Majors(Communications Majors)",
"Communication and Information Studies@Communications Majors(Communications Majors)",
"Information Technology and Informatics@Communications Majors(Communications Majors)",
"Journalism@Communications Majors(Communications Majors)",
"Journalism and Media Studies@Communications Majors(Communications Majors)",
"All Majors@Unspecified(Unspecified)", 
"Institutions and Behavior@Social Science Majors(Social Science Majors)",
"Clinical Psychology@Social Science Majors(Social Science Majors)",
"Counseling Psychology@Social Science Majors(Social Science Majors)",
"Learning Cognition and Development@Social Science Majors(Social Science Majors)",
"Organizational Psychology@Social Science Majors(Social Science Majors)",
"Psychology@Social Science Majors(Social Science Majors)",
"School Psychology@Social Science Majors(Social Science Majors)",
"Geography@Social Science Majors(Social Science Majors)",
"Anthropology@Social Science Majors(Social Science Majors)",
"Criminal Justice@Social Science Majors(Social Science Majors)",
"Economics@Social Science Majors(Social Science Majors)",
"Exercise Science and Sport Studies@Social Science Majors(Social Science Majors)",
"Human Resource Management@Social Science Majors(Social Science Majors)",
"Labor Studies and Employment Relations@Social Science Majors(Social Science Majors)",
"Labor and Employment Relations@Social Science Majors(Social Science Majors)",
"Planning and Public Policy@Social Science Majors(Social Science Majors)",
"Political Science@Social Science Majors(Social Science Majors)",
"Public Administration@Social Science Majors(Social Science Majors)",
"Public Health@Social Science Majors(Social Science Majors)",
"Public Policy@Social Science Majors(Social Science Majors)",
"Social Studies Education@Social Science Majors(Social Science Majors)",
"Social Work@Social Science Majors(Social Science Majors)",
"Sociology@Social Science Majors(Social Science Majors)",
"Urban Planning & Policy Development@Social Science Majors(Social Science Majors)",
"Women's & Gender Studies@Social Science Majors(Social Science Majors)",
"Mathematics Education@Education Majors(Education Majors)",
"Admin and Supervision of Education@Education Majors(Education Majors)",
"Adult and Continuing Education@Education Majors(Education Majors)",
"Education@Education Majors(Education Majors)",
"Education Culture and Society@Education Majors(Education Majors)",
"Educational Leadership@Education Majors(Education Majors)",
"Educational Statistics and Measurements@Education Majors(Education Majors)",
"Reading Education@Education Majors(Education Majors)",
"Reading Recovery@Education Majors(Education Majors)",
"Science Education@Education Majors(Education Majors)",
"Special Education@Education Majors(Education Majors)",
"Literacy Education@Education Majors(Education Majors)",
"Teacher Leadership@Education Majors(Education Majors)",
"Art@Visual and Performing Arts Majors(Arts Majors)",
"Dance@Visual and Performing Arts Majors(Arts Majors)",
"Dance Education@Visual and Performing Arts Majors(Arts Majors)",
"Design of Learning Environments@Visual and Performing Arts Majors(Arts Majors)",
"Music@Visual and Performing Arts Majors(Arts Majors)",
"Theater Arts@Visual and Performing Arts Majors(Arts Majors)",
"Visual Arts@Visual and Performing Arts Majors(Arts Majors)",
"Art History - Liberal Arts@Liberal Arts and History Majors(Liberal Arts Majors)",
"Classics@Liberal Arts and History Majors(Liberal Arts Majors)",
"Comparative Literature@Liberal Arts and History Majors(Liberal Arts Majors)",
"European Studies@Liberal Arts and History Majors(Liberal Arts Majors)",
"History@Liberal Arts and History Majors(Liberal Arts Majors)",
"History and Political Science@Liberal Arts and History Majors(Liberal Arts Majors)",
"Library and Information Studies@Liberal Arts and History Majors(Liberal Arts Majors)",
"Linguistics@Liberal Arts and History Majors(Liberal Arts Majors)",
"Philosophy@Liberal Arts and History Majors(Liberal Arts Majors)",
"Religion@Liberal Arts and History Majors(Liberal Arts Majors)",
"Religious Studies@Liberal Arts and History Majors(Liberal Arts Majors)",
"African Languages & Literature@Literature and Languages Majors(Lit & Lang Majors)",
"Africana Studies@Literature and Languages Majors(Lit & Lang Majors)",
"American Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Chinese@Literature and Languages Majors(Lit & Lang Majors)",
"East Asian Language and Cultures@Literature and Languages Majors(Lit & Lang Majors)",
"East Asian Languages and Area Studies@Literature and Languages Majors(Lit & Lang Majors)",
"English@Literature and Languages Majors(Lit & Lang Majors)",
"French@Literature and Languages Majors(Lit & Lang Majors)",
"German@Literature and Languages Majors(Lit & Lang Majors)",
"Italian@Literature and Languages Majors(Lit & Lang Majors)",
"Jewish Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Language Education@Literature and Languages Majors(Lit & Lang Majors)",
"Latin American Civilization Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Latino and Hispanic Caribbean Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Medieval Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Middle Eastern Studies@Literature and Languages Majors(Lit & Lang Majors)",
"Portugese@Literature and Languages Majors(Lit & Lang Majors)",
"Russian@Literature and Languages Majors(Lit & Lang Majors)",
"Spanish@Literature and Languages Majors(Lit & Lang Majors)",
    ];
  



var schoolname = ["School of Arts and Sciences", "School of Environmental and Biological Sciences", "Mason Gross School of the Arts", "Ernest Mario School of Pharmacy", "Rutgers Business School", "School of Communication and Information", "School of Engineering", "Edward J. Bloustein School of Planning and Public Policy", "School of Management and Labor Relations", "School of Social Work", "Other Majors"]; 
var schoolname_short = ["SAS", "SEBS", "MGSA", "EMSP", "RBS", "SCI", "SOE", "EBSPPP", "SMLR", "SSW", "Other Majors"]; 

var areaname = ["Biological, Agricultural, and Environmental Sciences Majors", "Physical and Related Science Majors", "Computer, Mathematics, and Statistics Majors", "Engineering Majors", "Business Majors", "Communications Majors", "Unspecified", "Social Science Majors", "Education Majors", "Visual and Performing Arts Majors", "Liberal Arts and History Majors", "Literature and Languages Majors"];
var areaname_short = ["Bio, Agri & Env Majors", "Physical Science Majors", "Comp, Math & Stats Majors", "Engineering Majors", "Business Majors", "Communications Majors", "Unspecified", "Social Science Majors", "Education Majors", "Arts Majors", "Liberal Arts Majors", "Lit & Lang Majors"];
var areaname_veryshort = ["Bio, Agri & Env", "Physical Science", "Comp, Math & Stats", "Engineering", "Business", "Communications", "Unspecified", "Social Science", "Education", "Arts", "Liberal Arts", "Lit & Lang"];




var positioncolor = d3.scale.ordinal().range(["#969696", "#737373", "#525252", "#252525"]); 
var classcolor = d3.scale.ordinal().range(["#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#0A0A0A"]);               
var majorarccolor = d3.scale.ordinal().range(colorbrewer.Set3[12]); 
    
var fillColor = d3.scale.ordinal().range(["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#AA00FF"]);
//var radialColor = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

var radialColor = ["#3366DF", "#E33333", "#FF8000", "#337F00", "#8C008C", "#0099c6", "#dd4477", "#5574a6", "#B40000", "#004c99", "#6633E3", "#997F1E", "#22aa99", "#994499", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

var majorplotmodecookie = getCookie('majorplotmode');

if (majorplotmodecookie == 2)
{
   document.getElementById("red").checked = false;
	 document.getElementById("blue").checked = true;	 
}

else
{
	 document.getElementById("red").checked = true;
	 document.getElementById("blue").checked = false;	
}


document.getElementById("majortab").checked = true;	 
document.getElementById("majortab").style.backgroundColor = "white";



var colorBymajor = d3.map();
var majorgroupIDBymajor = d3.map();
var majorplotmode = checkmajorplotmode();
var school_SAS = [], school_SEBS = [], school_MGSA = [], school_EMSP = [], school_RBS = [], school_SCI = [], school_SOE = []; 
var school_EBSPPP = [], school_SMLR = [], school_SSW = [], school_Other = [];
var area_BAES = [], area_Business = [], area_Communications = [], area_CMS = [], area_Education = [], area_Engineering = [];
var area_LAH = [], area_LL = [], area_Physical = [], area_Social = [], area_Arts = [], area_Other = [];
var majorgrouparray = [];

if (majorplotmode == 1)
{		 
   for (var n = 0; n < majorlist.length; n++)
   {
       var majorandschool = majorlist[n];
       var listedmajor = majorandschool.substring(0, majorandschool.indexOf("@"));
       var listedschool = majorandschool.substring(majorandschool.lastIndexOf("(")+1, majorandschool.length-1);
                                                       
       if (listedschool == "SAS")
       {
          school_SAS.push(listedmajor);                                 
          colorBymajor.set(listedmajor, majorarccolor(0));
          majorgroupIDBymajor.set(listedmajor, 0);
       }            
       
       else if (listedschool == "SEBS")
       {
          school_SEBS.push(listedmajor); 
          colorBymajor.set(listedmajor, majorarccolor(1));
          majorgroupIDBymajor.set(listedmajor, 1);
       } 
       
       else if (listedschool == "MGSA")
       {
          school_MGSA.push(listedmajor); 
          colorBymajor.set(listedmajor, majorarccolor(2));
          majorgroupIDBymajor.set(listedmajor, 2);
       } 
       
       else if (listedschool == "EMSP")
       {
          school_EMSP.push(listedmajor); 
          colorBymajor.set(listedmajor, majorarccolor(3));
          majorgroupIDBymajor.set(listedmajor, 3);
       } 
       
       else if (listedschool == "RBS")
       {
          school_RBS.push(listedmajor); 
          colorBymajor.set(listedmajor, majorarccolor(4));
          majorgroupIDBymajor.set(listedmajor, 4);
       }  
       
       else if (listedschool == "SCI")
       {
          school_SCI.push(listedmajor);  
          colorBymajor.set(listedmajor, majorarccolor(5));
          majorgroupIDBymajor.set(listedmajor, 5);
       } 
       
       else if (listedschool == "SOE")
       {
          school_SOE.push(listedmajor);
          colorBymajor.set(listedmajor, majorarccolor(6));
          majorgroupIDBymajor.set(listedmajor, 6);
       }   
       
       else if (listedschool == "EBSPPP")
       {
          school_EBSPPP.push(listedmajor);
          colorBymajor.set(listedmajor, majorarccolor(7));
          majorgroupIDBymajor.set(listedmajor, 7);
       }   
       
       else if (listedschool == "SMLR")
       {
          school_SMLR.push(listedmajor);
          colorBymajor.set(listedmajor, majorarccolor(8));
          majorgroupIDBymajor.set(listedmajor, 8);
       }  
      
       else if (listedschool == "SSW") 
       { 
          school_SSW.push(listedmajor);
          colorBymajor.set(listedmajor, majorarccolor(9));
          majorgroupIDBymajor.set(listedmajor, 9);
       }  
       
       else if (listedschool == "Other Majors")
       {
          school_Other.push(listedmajor); 
          colorBymajor.set(listedmajor, majorarccolor(10));
          majorgroupIDBymajor.set(listedmajor, 10);
       }  
       
       else
    	    alert(listedmajor);                                                
    }
    
    majorgrouparray.push({index: 0, data: school_SAS.length}); 
    majorgrouparray.push({index: 1, data: school_SEBS.length});
    majorgrouparray.push({index: 2, data: school_MGSA.length});
    majorgrouparray.push({index: 3, data: school_EMSP.length});
    majorgrouparray.push({index: 4, data: school_RBS.length});
    majorgrouparray.push({index: 5, data: school_SCI.length});
    majorgrouparray.push({index: 6, data: school_SOE.length});
    majorgrouparray.push({index: 7, data: school_EBSPPP.length});
    majorgrouparray.push({index: 8, data: school_SMLR.length});
    majorgrouparray.push({index: 9, data: school_SSW.length});
    majorgrouparray.push({index: 10, data: school_Other.length});
}



else if (majorplotmode == 2)
{
     for (var n = 0; n < majorlist2.length; n++)
     {
         var majorandarea = majorlist2[n];
         var listedmajor = majorandarea.substring(0, majorandarea.indexOf("@"));
         var listedarea = majorandarea.substring(majorandarea.lastIndexOf("(")+1, majorandarea.length-1);
                                                       
         if (listedarea == "Bio, Agri & Env Majors")
         {
            area_BAES.push(listedmajor);   
            colorBymajor.set(listedmajor, majorarccolor(0));
            majorgroupIDBymajor.set(listedmajor, 0);
         }   
       
         else if (listedarea == "Physical Science Majors")
         {
            area_Physical.push(listedmajor);  
            colorBymajor.set(listedmajor, majorarccolor(1));
            majorgroupIDBymajor.set(listedmajor, 1);
         }
       
         else if (listedarea == "Comp, Math & Stats Majors")
         {
            area_CMS.push(listedmajor);  
            colorBymajor.set(listedmajor, majorarccolor(2));
            majorgroupIDBymajor.set(listedmajor, 2);
         }
       
         else if (listedarea == "Engineering Majors")
         {
            area_Engineering.push(listedmajor);  
            colorBymajor.set(listedmajor, majorarccolor(3));
            majorgroupIDBymajor.set(listedmajor, 3);
         }
       
         else if (listedarea == "Business Majors")
         {
            area_Business.push(listedmajor);
            colorBymajor.set(listedmajor, majorarccolor(4));
            majorgroupIDBymajor.set(listedmajor, 4);
         }  
       
         else if (listedarea == "Communications Majors")
         {
            area_Communications.push(listedmajor); 
            colorBymajor.set(listedmajor, majorarccolor(5));
            majorgroupIDBymajor.set(listedmajor, 5);
         }
         
         else if (listedarea == "Unspecified")
         {
            area_Other.push(listedmajor);
            colorBymajor.set(listedmajor, majorarccolor(6));
            majorgroupIDBymajor.set(listedmajor, 6);
         }      
       
         else if (listedarea == "Social Science Majors")
         {
    	      area_Social.push(listedmajor); 
    	      colorBymajor.set(listedmajor, majorarccolor(7));
    	      majorgroupIDBymajor.set(listedmajor, 7);
         }     	 
       
         else if (listedarea == "Education Majors")
         {
    	      area_Education.push(listedmajor);
    	      colorBymajor.set(listedmajor, majorarccolor(8));
    	      majorgroupIDBymajor.set(listedmajor, 8);
         }  
              
         else if (listedarea == "Arts Majors")
         {
            area_Arts.push(listedmajor);
            colorBymajor.set(listedmajor, majorarccolor(9));
            majorgroupIDBymajor.set(listedmajor, 9);
         }                   
       
         else if (listedarea == "Liberal Arts Majors")
         {
            area_LAH.push(listedmajor); 
            colorBymajor.set(listedmajor, majorarccolor(10));
            majorgroupIDBymajor.set(listedmajor, 10);
         }  
       
         else if (listedarea == "Lit & Lang Majors")
         {
            area_LL.push(listedmajor);
            colorBymajor.set(listedmajor, majorarccolor(11));
            majorgroupIDBymajor.set(listedmajor, 11);
         }                 
       
         else
    	      alert(listedmajor);                                                
     }
     
     majorgrouparray.push({index: 0, data: area_BAES.length}); 
     majorgrouparray.push({index: 1, data: area_Physical.length});
     majorgrouparray.push({index: 2, data: area_CMS.length});
     majorgrouparray.push({index: 3, data: area_Engineering.length});
     majorgrouparray.push({index: 4, data: area_Business.length});
     majorgrouparray.push({index: 5, data: area_Communications.length});
     majorgrouparray.push({index: 6, data: area_Other.length});
     majorgrouparray.push({index: 7, data: area_Social.length});
     majorgrouparray.push({index: 8, data: area_Education.length});
     majorgrouparray.push({index: 9, data: area_Arts.length});
     majorgrouparray.push({index: 10, data: area_LAH.length});
     majorgrouparray.push({index: 11, data: area_LL.length});
}

var jsonfilename = "job5000.json";
var jsonfilename1 = 5000;
var diameter = 4000;
var scrOfX=0; 
var scrOfY=0;
var savedclick = [];  


var showCookieInitial = getCookie('favoritejob');
var savedjobpost = showCookieInitial.split("#");


var radius = diameter / 2;
var innerRadius = radius - 200;
	
var currentScale = 1;
var initialScale = 580/diameter;

var cloudscale = 0.52;
var cloudmode = 0;
var cloudcolorsign = 0;

var cloudWidth = 2.25*cloudscale*diameter;
var cloudHeight = 2.25*cloudscale*diameter;
var jWord = []; //["abc","def","ghi","jkl"];
var jCount = []; //[100, 250, 150, 200,200];

var selectedmajor = [];
var selectedmajorarc = [];
var selectedjob;  //job node selected from the job list
var selectedjobgroup;
var selectedsubgroupID = -1;
var linkedgroup = [];

var translateX = 0.82*diameter*initialScale;
var translateY = 0.68*diameter*initialScale;

var chord = d3.layout.chord();
var chord1 = d3.layout.chord();
var chord2 = d3.layout.chord();
var pie = d3.layout.pie()
          .sort(null)
          //.value(function(d) { return d.data; })
          .value(function(d) { return 1; })
          .padAngle(0.01)
          .startAngle(0.005*Math.PI)
          .endAngle(0.995*Math.PI);


var cluster = d3.layout.cluster()
             .size([360, innerRadius])
             .separation(function(a, b) {return a.parent == b.parent ? 1 : 1;})
             //.sort(null)
             .value(function(d) { return d.size; });
    
var bundle = d3.layout.bundle();

var line = d3.svg.line.radial()
           .interpolate("bundle")
           .tension(0.85)
           .radius(function(d) 
	         { 
	            return (d.deep==2590 ? d.y-125 : d.deep==2190 ? d.y-300 : d.deep==2240 ? d.y-300: d.y-150);
	         })
           .angle(function(d) { return d.x / 180 * Math.PI; });


var maxscale = 1.5*diameter/550;






var svg = d3.select("div.ui-layout-center").append("svg")
          .attr("width", 0.4*diameter)
          .attr("height", 0.3*diameter)
          .append("g")
	        .call(d3.behavior.zoom().scaleExtent([0.7, maxscale])
	        .on("zoom", zooming))
	        .on("dblclick.zoom", null)
	        .attr('viewBox', "0 0 " + 225 + " " + 225)
          .attr("transform", "translate(" + translateX + "," + translateY + ")scale("+initialScale+","+initialScale+")")
	        .append('svg:g');
	

var arc = d3.svg.arc();      //for career sector
var arc2 = d3.svg.arc();     //for major
var arc3 = d3.svg.arc();     //for subgroup
var careersectorarc, grouptext;                
                

var majorarc, subgrouparc, majortitle;


d3.selectAll(".legend").remove();
addColorlegend();


function addColorlegend()
{

var sampleOrdinal, legendtitle;

if (majorplotmode == 1)
{
   var LegendColor = ["#8dd3c7","#cccc00","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#ff99cc","#00b4b4","#bc80bd","#9BCDFF"];
   sampleOrdinal = d3.scale.ordinal().range(LegendColor.reverse()).domain(schoolname_short.reverse());
   legendtitle = "Schools";
}

else if (majorplotmode == 2)
{
	 var LegendColor = ["#8dd3c7","#cccc00","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#ff99cc","#00b4b4","#bc80bd","#9BCDFF","#FFE167"];
   sampleOrdinal = d3.scale.ordinal().range(LegendColor.reverse()).domain(areaname_veryshort.reverse());
   legendtitle = "Major Areas";
}

var verticalLegend = d3.svg.legend()
                   .labelFormat("none")
                   .cellPadding(5)
                   .orientation("vertical")
                   .units(legendtitle)
                   .cellWidth(25)
                   .cellHeight(12)
                   .inputScale(sampleOrdinal)
                   .cellStepping(10);




var legend_VPos = 1.54*parseInt( d3.select('.newbutton').style('top') );
console.log(legend_VPos);


  d3.select("svg")
  .append("g")
  .attr("transform", "translate(" + 0 + "," + legend_VPos + ")scale(0.75, 0.75)")
  .attr("class", "legend")
  .call(verticalLegend);
} 
 


var allButtons=  d3.selectAll('svg').append("g").attr("id","allButtons");
var connectionlabel= ["Major->Job", "Major<-Job"];
var connectiondirection = "Major->Job";
 
var defaultColor= "white";
var hoverColor= "#3CB371";
var pressedColor= "#2E8B57";

//groups for each button (which will hold a rect and text)
var buttonGroups = allButtons.selectAll("g.button")
                   .data(connectionlabel)
                   .enter()
                   .append("g")
                   .attr("class","button")
                   .style("cursor","pointer");
                        
                       
buttonGroups.append("circle")
.attr("class","buttonRect")
.attr("r",9)
.attr("cx",function(d,i) 
{
      return 100+24*i;
})
.attr("cy", 10)
.attr("fill","white")
.attr("stroke","black")
.attr("stroke-width","2");
            
            
 d3.selectAll("circle").filter(function(d) { return d == connectiondirection; }).attr("fill", pressedColor);
            

 



function updateButtonColors(button, parent) 
{
    parent.selectAll("circle")
            .attr("fill", "white");

    button.select("circle")
            .attr("fill", pressedColor);            
}
 
 

buttonGroups.on("click",function(d) 
{      
	  connectiondirection = d;   
	  svg.selectAll(".jobgroupnode").remove();	
    addCareerSectorLabel(); 
    goback2(); 
    
    if (cloudmode == 0)
    {
    	 svg.selectAll(".majorgroupnode").style("visibility", "visible");
  	  
    }
     
    updateButtonColors(d3.select(this), d3.select(this.parentNode)) 
})
.on ("mouseover", function() 
{
    if (d3.select(this).select("circle").attr("fill") != pressedColor) 
    {
       d3.select(this)
       .select("circle")
       .attr("fill",hoverColor);
    }
})
.on ("mouseout", function() 
{
    if (d3.select(this).select("circle").attr("fill") != pressedColor) 
    {
       d3.select(this)
       .select("circle")
       .attr("fill","white");
    }
})
 
 
d3.select("svg").append("text")    
.attr("transform", "translate(0, 15)")
.text(connectionlabel[0])
    .style("font-weight", "bold")
    .style("font-size", "14px");

 
d3.select("svg").append("text")    
.attr("transform", "translate(145, 15)")
.text(connectionlabel[1])
.style("font-weight", "bold")
.style("font-size", "14px");
 
 
  
 d3.selectAll('svg')
  .append('image')
  .attr('xlink:href','refresh.png')
  .attr('class', 'pico')
  .attr('height', '40')
  .attr('width', '40')
  .attr("transform", "translate(820,-3)scale(0.8, 0.8)")
  .attr("onclick", "refreshwindow()");  
  
 d3.selectAll('svg')
  .append('image')
  .attr('xlink:href','questionmark.jpg')
  //.attr("href", "http://www.baidu.com")
  .attr('class', 'pico')
  .attr('height', '44')
  .attr('width', '40')
  .attr("transform", "translate(850,-5)scale(0.8, 0.8)")
  .attr("onclick", "openAbout()");




 function openShopCartDialogbox()
 {
 	   popupbox3.render();	
 }
 
 
 function ShopCartDialogbox()	
 {
 	   this.render = function() 
	   {
	   	    var dialogbox = document.getElementById('shopcartdialogbox');

		      dialogbox.style.left = "760px";
	        dialogbox.style.top = "30px";
	        dialogbox.style.display = "block";
	        
	        
	        //Head + savelink + "&nbsp;&nbsp;&nbsp;" +  '<button onclick="popupbox2.ok()"> <font color="#0000FF" font size = "3px"> Close </button>' + '<br>';
		     
		      
		      document.getElementById('shopcartdialogboxbody').innerHTML = "Saved Job Posting(s)";		     
		      document.getElementById("shopcartdialogboxbody").style.textAlign = "center";	     
		      document.getElementById("shopcartdialogboxbody").style.color = "black";
		      //document.getElementById("shopcartdialogboxbody").style.size = "9px";
		     
		      document.getElementById('shopcartdialogboxfoot').innerHTML = '<button onclick="openShopCart()"> <font color="#0000FF" font size = "4px"> Open</button>' + "&nbsp;" +	'<button onclick="clearShopCart()"> <font color="#0000FF" font size = "4px">   Clear</button>' + "&nbsp;"  +  '<button onclick="popupbox3.ok()"> <font color="#0000FF" font size = "4px">  Close</button>';		     
		      document.getElementById("shopcartdialogboxfoot").style.textAlign = "center";	
	   }
	   
	   this.ok = function(){document.getElementById('shopcartdialogbox').style.display = "none";}
	  
	   document.getElementById('shopcartdialogbox').onmousedown = function () {_drag_init(this); return false;};
     document.onmousemove = _move_elem;
     document.onmouseup = _destroy; 
 }
 
 
 function openShopCart()
 {
 	    var showCookie = getCookie('favoritejob');
 	    var splitCookie = showCookie.split("#");
 	    
 	    //console.log(splitCookie);
 	    var jobpostarray = [];
 	    
 	    if (splitCookie.length>0)
 	    {
 	       currentDbcText = "Saved Job Posting";	   	 	    
		     //addTable(savedjobpost);	
		     
		     nodes.filter(function(n) { return !n.children; })
	       .forEach( function(d) 
	       {
	 	         for (var i=0; i<splitCookie.length; i++)
	 	         {
	 	  	         if (splitCookie[i] == d.name)                                   
                    jobpostarray.push(d);	 	 	       
	 	         }
	       });
		     
		     
		     addTable(jobpostarray);			     
		  } 
 }
 
 
 
 
 function clearShopCart()
 {
 	   document.cookie = "favoritejob=" + "";

     if (currentDbcText == "Saved Job Posting")
     {
     var currentDBLDiv = document.getElementById("currentdblclick");  
	   currentDBLDiv.innerHTML = "";
	  
     var myTableDiv = document.getElementById("myDynamicTable");    
     myTableDiv.innerHTML = "";
     }
 }
 
 
 
 
 function openAbout()
 {
 	   window.open("http://coewww.rutgers.edu/www2/vizlab/jobvizIntro.html");
 }



function zooming() 
{ 
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
		currentScale = d3.event.scale;		
		//console.log(currentScale);
}	


var cloudfill = d3.scale.category20();

var cloudEl = svg.append("g") 
              .attr("width", cloudWidth)
              .attr("height", cloudHeight)   
              .attr("id","cloudId")              
              .attr("transform", "translate(" + cloudWidth/60 + ", " + cloudHeight/60 + ")");

function transform(d) 
{
    return "translate(" + x(d[0]) + "," + y(d[1]) + ")";
}



var subgroupsign = 0;
var currentDbcText = "Job Postings of 2016";
var currentNodeClickingMode = 0; //0 for no-clicking, 1 for clicking majors, 2 for clicking career sector, 3 for clicking subgroup.

var jobgroup_num = 0; 
var node = svg.append("g").selectAll(".node");	
var groupnode = svg.append("g").selectAll(".groupnode");
var grouptag = svg.append("g").selectAll(".grouptag");
var groupsizelabel = svg.append("g").selectAll(".groupsizelabel"); 
var subgroupnode = svg.append("g").selectAll(".subgroupnode");

var nodes=[];
var links=[];
var newlinks = [];
var newlinks2 = [];
var jobtext_pair = [];
var cloudwords = [];
var connectedmajornodes = [];
var connectedmajornodes2 = [];

var relatedjobnode = [];
var majornode = [];
var majorIDByIndex = d3.map();
var colorByindex = d3.map();
var majorarray = [];
var grouptext = [];
var CoefMatrix = [];
var CoefMatrix2 = [];
var midjobnodearray = [];
var coefarray = [];
var indexByName = d3.map();
var nameByIndex = d3.map();
var groupIDByIndex = d3.map();
var majorgroupIDByIndex = d3.map();
var groupanditem = []; 
var groupandId = [];
var groupidarray = [];
var jobgrouparray = [];
var jobgroupnodeangle = [];


  
var divTip = d3.select("div.ui-layout-center").append("div")   
             .attr("class", "tooltip")
             .style("opacity", 0);


var div = d3.select("div.ui-layout-center").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);         	


var div2 = d3.select("div.ui-layout-west").append("div")
           .attr("class", "tooltip")
           .style("opacity", 0); 
          
var centraltext = svg.append("text")
                  .attr("x", 0)
                  .attr("y", 0);             

var popupbox1 = new cloudtagbox();
var popupbox2 = new jobwindow();
var popupbox3 = new ShopCartDialogbox();


var sendCloud = [];
var displayedJobGroup = [];
var computeddx = [];      //the new computed rotation angles of all job nodes in hierarchy

var secondringfunction = [];
var thirdringfunction = [];
var secondringgroup = [];
var thirdringgroup = [];
var CookieSplit = [];

var careerfieldObject = [];
var careerfieldObject2 = [];
var career_postype_num = [];
var career_postype = [];
var career_classlevel_num = [];
var career_classlevel = [];

var schoolandmajor = []; 
schoolandmajor[0] = [];
schoolandmajor[1] = [];
schoolandmajor[2] = [];
schoolandmajor[3] = [];
schoolandmajor[4] = [];
schoolandmajor[5] = [];
schoolandmajor[6] = [];
schoolandmajor[7] = [];
schoolandmajor[8] = [];
schoolandmajor[9] = [];
schoolandmajor[10] = [];


var areaandmajor = []; 
areaandmajor[0] = [];
areaandmajor[1] = [];
areaandmajor[2] = [];
areaandmajor[3] = [];
areaandmajor[4] = [];
areaandmajor[5] = [];
areaandmajor[6] = [];
areaandmajor[7] = [];
areaandmajor[8] = [];
areaandmajor[9] = [];
areaandmajor[10] = [];
areaandmajor[11] = [];

var alljobnodes = [];

var alljobnodes_volunteer = [];  
var alljobnodes_internship = []; 
var alljobnodes_ftentrylevel = [];
var alljobnodes_ftexperienced = [];    
       	       	
var alljobnodes_freshman = [];  
var alljobnodes_sophomore = []; 
var alljobnodes_junior = [];
var alljobnodes_senior = []; 
var alljobnodes_graduate = []; 
var alljobnodes_alumni = []; 
var alljobnodes_unspecified = [];


var mouseclicktime = 0;
var majorarc_angle = 180, jobarc_angle = 180;
var keyword_selected;

    
/* Outer Wheel */
d3.json(jsonfilename, function (error, packages) 
{	
	     nodes = cluster.nodes(packageHierarchy(packages));	              
       links = packageImports(nodes);   
       
              
       nodes.forEach(function(d)   // Compute a map from id to node.
       {  
           if (d.deep == "3090")
              alljobnodes.push(d);
       });
       
       addTable(alljobnodes);
       document.getElementById("mySelect").value = 'all'; 
                      
          
       drawmajornode();
           
       $.searchterm1(majorarray);                      
        
                   
       var matrix = [], matrix1 = [];
       var numIter = 0;         

       // Returns the cluster names.
       function packId(id) { return id.substring((id.indexOf("@") + 1), id.indexOf("|")); }
       
       // Compute a unique index for each package name.
       packages.forEach(function (d) 
       {
       	    var thispackage = d;       	    
       	    var nodetype = d.id.substring(0, d.id.indexOf("@"));       	    
       	    var jobindex = d.name;
       	    var thiskey = d.key;
       	    var temp = packId(d.id);

		        var nodeoriginalId = thiskey.substring(thiskey.lastIndexOf("#")+1, thiskey.length);
       	    
       	
            if (!indexByName.has(d = packId(d.id)) && temp != "")   //filter the repeated group names
            {
            	  //console.log(d);                       //print out the group names             	          	              	             	 
            	  
            	  groupanditem[numIter] = [];  
            	  groupanditem[numIter].push(thispackage); 
            	  
            	  groupandId[numIter] = []; 
            	  groupandId[numIter].push(nodeoriginalId);    
            	           	                                            	              	      	              	  
                nameByIndex.set(numIter, d);
                indexByName.set(d, numIter++);
                           
                
                if(nodetype == "empl")
                {
                	 groupIDByIndex.set(jobindex, jobgroup_num);       
		   	        	 jobgroup_num++;
		   	        }	   	           	        	   	         
            }
            
            else
            {           	  
            	  var thisgroupid = indexByName.get(d);    	              	               
                groupanditem[thisgroupid].push(thispackage); 
                groupandId[thisgroupid].push(nodeoriginalId);
                
                if (nodetype == "empl")
                	 groupIDByIndex.set(jobindex, thisgroupid);                  	 
            }
       });
       
       
       savePosClassGroup();	     	     
       saveSubGroup();
	     	    	 
           
       
       for (var i=0; i<groupanditem.length; i++) 
       {
           matrix[i] = [];
           for (var j=0; j<groupanditem.length; j++) 
           {
           	   if (i == j)
           	      matrix[i][j] = groupanditem[i].length;
           	   else
                  matrix[i][j] = 0;                                   
           } 
       }
           
       for (var i=0; i<jobgroup_num; i++) 
       {
       	   
       	   jobgrouparray.push({index: i, data: groupanditem[i].length});      	   
       	          	   
           matrix1[i] = [];
           for (var j=0; j<jobgroup_num; j++) 
               matrix1[i][j] = matrix[i][j];    
       }
                      
       chord.matrix(matrix1);   
                    
     
       var chordgroups = chord.groups();       
       
       var newarcangle = [];       
       chordgroups[0].startAngle = 0;
       chordgroups[0].endAngle = 0.5*chordgroups[0].endAngle;
       newarcangle.push({startAngle: chordgroups[0].startAngle, endAngle: chordgroups[0].endAngle});
       
       for (var i = 1; i<chordgroups.length; i++)
       {
       	   var anglespan = chordgroups[i].endAngle - chordgroups[i].startAngle;
       	   chordgroups[i].startAngle = chordgroups[i-1].endAngle;
       	   chordgroups[i].endAngle = chordgroups[i-1].endAngle + 0.5*anglespan;
       	   newarcangle.push({startAngle: chordgroups[i].startAngle, endAngle: chordgroups[i].endAngle});
       }
                                                
       
    
       var mouseclickflag2 = 0;          
       var pievaluearray = [];
        
		   for (var t = 0; t < pie(jobgrouparray).length; t++)  
		   	   pievaluearray.push({index: t, value: pie(jobgrouparray)[t].value});

		   		   
		   pievaluearray.sort(function (a, b) 
		   {
          if (a.value < b.value)
             return 1;
          
          if (a.value > b.value) 
             return -1;
 
          return 0;
       });
       

       for (var t = 0; t < pie(jobgrouparray).length; t++)  
		   {
		   	   var arraylength = radialColor.length;	   	   
           colorByindex.set(pievaluearray[t].index, radialColor[t%arraylength]);
       }

		   
       addCareerSectorLabel();
       
       //console.log(majornode);
		    
		   for (var t = 0; t < jobgroup_num; t++)  
	     { 
           CoefMatrix[t] = [];
           midjobnodearray[t] = [];
           var midindex = Math.floor(groupanditem[t].length/2 + 0.5);
              
     
           for (var s = 0; s < majornode.length; s++)           
           {           	   
           	    var midjobnode = jQuery.extend({}, groupanditem[t][midindex]);
                midjobnode.x = 180*jobgroupnodeangle[t]/Math.PI;
           	    
           	    var thismajorgroup = majornode[s].id.substring((majornode[s].id.indexOf("@") + 1), majornode[s].id.indexOf("|"));
           	    
           	    if (majorplotmode == 1)
	  	          {
	  	  	         if (thismajorgroup == "Other Majors")
	  	  	            midjobnode.x = midjobnode.x - 4.0;
	  	  	 
	  	  	         else if (thismajorgroup == "SSW")
	  	  	 	          midjobnode.x = midjobnode.x - 3.2;
	  	  	 	  
	  	  	         else if (thismajorgroup == "SMLR")
	  	  	 	          midjobnode.x = midjobnode.x - 2.4;
	  	  	 	  
	  	  	         else if (thismajorgroup == "EBSPPP")
	  	  	 	          midjobnode.x = midjobnode.x - 1.6;
	  	  	 	  
	  	  	         else if (thismajorgroup == "SOE")
	  	  	 	          midjobnode.x = midjobnode.x - 0.8;     
	  	  	 	  
	  	  	         else if (thismajorgroup == "SCI")
	  	  	 	          midjobnode.x = midjobnode.x - 0;
	  	  	 	 
	  	  	         else if (thismajorgroup == "RBS")
	  	  	 	          midjobnode.x = midjobnode.x + 0.8;
	  	  	 	  
	  	  	         else if (thismajorgroup == "EMSP")
	  	  	 	          midjobnode.x = midjobnode.x + 1.6;
	  	  	 	  
	  	  	         else if (thismajorgroup == "MGSA")
	  	  	 	          midjobnode.x = midjobnode.x + 2.4;
	  	  	 	  
	  	  	         else if (thismajorgroup == "SEBS")
	  	  	 	          midjobnode.x = midjobnode.x + 3.2;
	  	  	 	  
	  	  	         else if (thismajorgroup == "SAS")
	  	  	 	          midjobnode.x = midjobnode.x + 4.0;
	  	          }
	  	  
	  	  
	  	          else if (majorplotmode == 2)
                {
        	         if (thismajorgroup == "Unspecified")
                      midjobnode.x = midjobnode.x - 4.4;
              
                   else if (thismajorgroup == "Lit & Lang Majors")
                      midjobnode.x = midjobnode.x - 3.6;
              
                   else if (thismajorgroup == "Liberal Arts Majors")
                      midjobnode.x = midjobnode.x - 2.8;
              
                   else if (thismajorgroup == "Arts Majors")
                      midjobnode.x = midjobnode.x - 2.0;
           
                   else if (thismajorgroup == "Education Majors")
                      midjobnode.x = midjobnode.x - 1.2;
              
                   else if (thismajorgroup == "Social Science Majors")
                      midjobnode.x = midjobnode.x - 0.4;
              
                   else if (thismajorgroup == "Communications Majors")
                      midjobnode.x = midjobnode.x + 0.4;
              
                   else if (thismajorgroup == "Business Majors")
                      midjobnode.x = midjobnode.x + 1.2;
              
                   else if (thismajorgroup == "Engineering Majors")
                      midjobnode.x = midjobnode.x + 2.0;
              
                   else if (thismajorgroup == "Comp, Math & Stats Majors")
                      midjobnode.x = midjobnode.x + 2.8;
              
                   else if (thismajorgroup == "Physical Science Majors")
                      midjobnode.x = midjobnode.x + 3.6;
              
                   else if (thismajorgroup == "Bio, Agri & Env Majors")
                      midjobnode.x = midjobnode.x + 4.4;
                }
           	    
           	     	    
           	    CoefMatrix[t][s] = 0;      	           	   
           	    for (var r = 0; r < careerfieldObject[t].major.length; r++)
           	    {
           	    	  if (majornode[s].key == careerfieldObject[t].major[r])
           	    	  {
           	    	   	  var coef = careerfieldObject[t].major_num[r]/groupanditem[t].length;         	    	   	            	    	   	           	    	   	            	    	   	            	    	   	  
           	    	   	  CoefMatrix[t][s] = careerfieldObject[t].major_num[r];
           	    	   	          
           	    	      newlinks.push({source: midjobnode, target: majornode[s]});
           	    	  }   
           	    }	          	        
           }
       }
              
       plotConnectionLines();  
       //plotRibbons();
                     
       $( "#tensioncount" ).val( 80 );
	     $( "#tensionslider" ).slider(
	     {
          range: "min",
          value: 80,
          min: 61,
          max: 100,
      
          slide: function( event, ui ) 
		      {
			        $(this).parent().find("#tensioncount").val(ui.value);			       			       
			        line.tension(ui.value / 100);
              connectionlines.attr("d", line);
              
              if (ui.value > 95 && currentNodeClickingMode == 0)
                 plotRibbons();
                 
              else
              	 svg.selectAll(".ribbon").attr("class", "link");
		      },            
       });
	                          
       saveMidJobNodeArray();       
       drawmajorarc();        
       drawCareerSector(); 
       addCareerSectorInfo(0);   
       drawSummaryWidget_Jobs();    
       //drawSummaryWidget_Majors();                                      			   
});




function savePosClassGroup()
{
	  for (var t = 0; t < jobgroup_num; t++) 
	  {
	     	careerfieldObject[t] = new Object();              
        careerfieldObject[t].major = [];  
        careerfieldObject[t].major_num = [];                                     
        var majornum = 0;                   	    
       	
       	careerfieldObject[t].positiontype_volunteer = [];  
        careerfieldObject[t].positiontype_internship = []; 
       	careerfieldObject[t].positiontype_ftentrylevel = [];
       	careerfieldObject[t].positiontype_ftexperienced = [];    
       	       	
       	careerfieldObject[t].classlevel_freshman = [];  
        careerfieldObject[t].classlevel_sophomore = []; 
       	careerfieldObject[t].classlevel_junior = [];
       	careerfieldObject[t].classlevel_senior = []; 
       	careerfieldObject[t].classlevel_graduate = []; 
       	careerfieldObject[t].classlevel_alumni = []; 
       	careerfieldObject[t].classlevel_unspecified = [];
       	       	                                    
           
        for (var w = 0; w < groupanditem[t].length; w++) 
	      {	         	
	          var thisimports = groupanditem[t][w].imports;  
	                                                           	              
	          for (var j = 0; j < thisimports.length; j++)  
	          {
	              var thisimporttype = thisimports[j].substring(0, thisimports[j].indexOf("@"));              	  
	           	  var temp = thisimports[j].substring(thisimports[j].indexOf("|")+1, thisimports[j].length);  	  
    	     	  
    	          if (thisimporttype=="maj")
                {	                    	           	              	                   	     
	              	 var contained = 0;
	              	     
	                 for (var i = 0; i < careerfieldObject[t].major.length; i++)
	              	 {
	              	     if (careerfieldObject[t].major[i] == temp)
	              	     {
	              	     	  contained = 1;
	              	     	  careerfieldObject[t].major_num[i]++;
	              	     }
	              	 }
	              	     
	              	 if (contained == 0)
	                 {	              	     	
	           	        careerfieldObject[t].major.push(temp);
	           	        careerfieldObject[t].major_num[majornum] = 1;
	           	        majornum++;
	           	     }              	     	              	     
             	  }	              	  	              	  	              
	              	  
	              else if (thisimporttype=="pos")
                { 
                	 if (temp == "Volunteer " || temp == "Co-op ")
                	 {
                      careerfieldObject[t].positiontype_volunteer.push(groupanditem[t][w]);
                      alljobnodes_volunteer.push(groupanditem[t][w]);
                   }
                            	     	                                  	                  	 
                 	 else if (temp == "Externship " || temp == "Fellowship " || temp == "Internship " || temp == "Temporary/Seasonal " || temp == "Part-time entry-level " || temp == "Part-time experienced ")
                   { 	
                    	careerfieldObject[t].positiontype_internship.push(groupanditem[t][w]);
                    	alljobnodes_internship.push(groupanditem[t][w]);                    	    
                   }
                   	                       	                     	         
                   else if (temp == "Full-time entry-level ")
                   {
                      careerfieldObject[t].positiontype_ftentrylevel.push(groupanditem[t][w]); 
                      alljobnodes_ftentrylevel.push(groupanditem[t][w]); 
                   } 
                    	  
                   else if (temp == "Full-time experienced " || temp == "Full Time-Mid-Career ")
                   {
                      careerfieldObject[t].positiontype_ftexperienced.push(groupanditem[t][w]);  
                      alljobnodes_ftexperienced.push(groupanditem[t][w]);   
                   }                 	                         	
                } 
                
                else if (thisimporttype=="class")
                {  	                	
                	 if (temp == "Freshman")
                	 {
                      careerfieldObject[t].classlevel_freshman.push(groupanditem[t][w]);
                      alljobnodes_freshman.push(groupanditem[t][w]);
                   }
                            	     	                                  	                  	 
                 	 else if (temp == "Sophomore")
                 	 {
                    	careerfieldObject[t].classlevel_sophomore.push(groupanditem[t][w]); 
                    	alljobnodes_sophomore.push(groupanditem[t][w]);
                   }                   	    
                    	                       	                     	         
                   else if (temp == "Junior")
                   {
                      careerfieldObject[t].classlevel_junior.push(groupanditem[t][w]);
                      alljobnodes_junior.push(groupanditem[t][w]); 
                   }
                    	  
                   else if (temp == "Senior")
                   {
                      careerfieldObject[t].classlevel_senior.push(groupanditem[t][w]); 
                      alljobnodes_senior.push(groupanditem[t][w]);
                   }
                      
                   else if (temp == "Graduate Student")
                   {
                      careerfieldObject[t].classlevel_graduate.push(groupanditem[t][w]); 
                      alljobnodes_graduate.push(groupanditem[t][w]);
                   }
                      
                   else if (temp == "Alumni")
                   {
                      careerfieldObject[t].classlevel_alumni.push(groupanditem[t][w]); 
                      alljobnodes_alumni.push(groupanditem[t][w]);
                   }
                      
                   else
                   {
                      careerfieldObject[t].classlevel_unspecified.push(groupanditem[t][w]);
                      alljobnodes_unspecified.push(groupanditem[t][w]);
                   }                    	                         	
                }                                      	              	              	               	                	  	              	  	              	 	              	  
	          }	                                        	         
	       }

	          	          
	       career_postype_num[t] = 0;
	       career_postype[t] = [];	       	       
	       
	       if (careerfieldObject[t].positiontype_volunteer.length > 0)
	       {
	          career_postype[t].push("volunteer"); 
	          career_postype_num[t]++;
	       }
	       
	          	          
	       if (careerfieldObject[t].positiontype_internship.length > 0)
	       {
	          career_postype[t].push("internship"); 
	          career_postype_num[t]++;
	       }   	          	             
	           	               
	             
         if (careerfieldObject[t].positiontype_ftentrylevel.length > 0)
         {
	          career_postype[t].push("ftentrylevel"); 
	          career_postype_num[t]++;
	       }  
	          
	          
	       if (careerfieldObject[t].positiontype_ftexperienced.length > 0)
	       {
	          career_postype[t].push("ftexperienced");
	          career_postype_num[t]++;
	       } 
	       
	       
	       
	       career_classlevel_num[t] = 0;
	       career_classlevel[t] = [];	       	       
	       
	       if (careerfieldObject[t].classlevel_freshman.length > 0)
	       {
	          career_classlevel[t].push("freshman"); 
	          career_classlevel_num[t]++;
	       }
	       
	          	          
	       if (careerfieldObject[t].classlevel_sophomore.length > 0)
	       {
	          career_classlevel[t].push("sophomore"); 
	          career_classlevel_num[t]++;
	       }   	          	             
	           	               
	             
         if (careerfieldObject[t].classlevel_junior.length > 0)
         {
	          career_classlevel[t].push("junior"); 
	          career_classlevel_num[t]++;
	       }  
	          
	          
	       if (careerfieldObject[t].classlevel_senior.length > 0)
	       {
	          career_classlevel[t].push("senior");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_graduate.length > 0)
	       {
	          career_classlevel[t].push("graduate");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_alumni.length > 0)
	       {
	          career_classlevel[t].push("alumni");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_unspecified.length > 0)
	       {
	          career_classlevel[t].push("unspecified");
	          career_classlevel_num[t]++;
	       }	       	          	                                 	                                             
	  } 
	  
	  
	  //console.log(alljobnodes_volunteer);
	  //console.log(alljobnodes_internship.length);
	  //console.log(alljobnodes_ftentrylevel.length);
	  //console.log(alljobnodes_ftexperienced.length);
}





function saveSubGroup()
{	     
	     for (var t = 0; t < jobgroup_num; t++) 
	     {
	     	    careerfieldObject2[t] = new Object();              
            careerfieldObject2[t].subgroup = []; 
            careerfieldObject2[t].subgroup_name = [];                                    
            var subnum = -1;              	          	                                     
           
            for (var w = 0; w < groupanditem[t].length; w++)
            {
            	   var thiskey = groupanditem[t][w].key;          	   
            	   var res = thiskey.split("#"); 
            	   var contained_sign = -1;
            	   
            	   for (var i = 0; i < careerfieldObject2[t].subgroup_name.length; i++)
            	   {
            	   	   if (careerfieldObject2[t].subgroup_name[i] == res[4])
            	   	      contained_sign = i;
            	   }

                 if (contained_sign == -1)
                 {
                    subnum++;                       
                    careerfieldObject2[t].subgroup_name.push(res[4]);
                    careerfieldObject2[t].subgroup[subnum] = [];
                    careerfieldObject2[t].subgroup[subnum].push(groupanditem[t][w]);  
                 }
                 
                 else if (contained_sign > -1)
                    careerfieldObject2[t].subgroup[contained_sign].push(groupanditem[t][w]);    
            }          
	     }


}






function saveMidJobNodeArray()
{
	  for (var t = 0; t < jobgroup_num; t++)  
	  { 
	  	  midjobnodearray[t] = [];
        var midindex = Math.floor(groupanditem[t].length/2 + 0.5);
	  	
	  	  if (majorplotmode == 1)
	  	  {
	  	  	  var midjobnode1 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode1.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode1.x = midjobnode1.x - 4.0;
	  	  	  midjobnodearray[t].push(midjobnode1);
	  	  	 
	  	  	  var midjobnode2 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode2.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode2.x = midjobnode2.x - 3.2;
	  	  	 	midjobnodearray[t].push(midjobnode2);
	  	  	 	  
	  	  	  var midjobnode3 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode3.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode3.x = midjobnode3.x - 2.4;
	  	  	 	midjobnodearray[t].push(midjobnode3);
	  	  	 	  
	  	  	  var midjobnode4 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode4.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode4.x = midjobnode4.x - 1.6;
	  	  	 	midjobnodearray[t].push(midjobnode4);
	  	  	 	  
	  	  	  var midjobnode5 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode5.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode5.x = midjobnode5.x - 0.8;
	  	  	 	midjobnodearray[t].push(midjobnode5);
	  	  	 	  
	  	  	  var midjobnode6 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode6.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode6.x = midjobnode6.x - 0;
	  	  	 	midjobnodearray[t].push(midjobnode6);
	  	  	 	 
	  	  	  var midjobnode7 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode7.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode7.x = midjobnode7.x + 0.8;
	  	  	  midjobnodearray[t].push(midjobnode7);
	  	  	 	  
	  	  	  var midjobnode8 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode8.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode8.x = midjobnode8.x + 1.6;
	  	  	 	midjobnodearray[t].push(midjobnode8);
	  	  	 	  
	  	  	  var midjobnode9 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode9.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode9.x = midjobnode9.x + 2.4;
	  	  	  midjobnodearray[t].push(midjobnode9);
	  	  	 	  
	  	  	  var midjobnode10 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode10.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode10.x = midjobnode10.x + 3.2;
	  	  	 	midjobnodearray[t].push(midjobnode10);
	  	  	 	  
	  	  	  var midjobnode11 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode11.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode11.x = midjobnode11.x + 4.0;
	  	  	 	midjobnodearray[t].push(midjobnode11);
	  	  }
	  	  
	  	  
	  	  else if (majorplotmode == 2)
        {
        	  var midjobnode1 = jQuery.extend({}, groupanditem[t][midindex]);
        	  midjobnode1.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode1.x = midjobnode1.x - 4.4;
            midjobnodearray[t].push(midjobnode1);
              
            var midjobnode2 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode2.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode2.x = midjobnode2.x - 3.6;
            midjobnodearray[t].push(midjobnode2);
              
            var midjobnode3 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode3.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode3.x = midjobnode3.x - 2.8;
            midjobnodearray[t].push(midjobnode3);
              
            var midjobnode4 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode4.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode4.x = midjobnode4.x - 2.0;
            midjobnodearray[t].push(midjobnode4);
           
            var midjobnode5 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode5.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode5.x = midjobnode5.x - 1.2;
            midjobnodearray[t].push(midjobnode5);
              
            var midjobnode6 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode6.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode6.x = midjobnode6.x - 0.4;
            midjobnodearray[t].push(midjobnode6);
              
            var midjobnode7 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode7.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode7.x = midjobnode7.x + 0.4;
            midjobnodearray[t].push(midjobnode7);
              
            var midjobnode8 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode8.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode8.x = midjobnode8.x + 1.2;
            midjobnodearray[t].push(midjobnode8);
              
            var midjobnode9 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode9.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode9.x = midjobnode9.x + 2.0;
            midjobnodearray[t].push(midjobnode9);
              
            var midjobnode10 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode10.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode10.x = midjobnode10.x + 2.8;
            midjobnodearray[t].push(midjobnode10);
              
            var midjobnode11 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode11.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode11.x = midjobnode11.x + 3.6;
            midjobnodearray[t].push(midjobnode11);
              
            var midjobnode12 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode12.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode12.x = midjobnode12.x + 4.4;
            midjobnodearray[t].push(midjobnode12);
         }
	  }
}







function mouseclk(d) 
{
	 currentNodeClickingMode = 1;	
	 var currentmajorgroup = d.id.substring(d.id.lastIndexOf("@")+1, d.id.lastIndexOf("|"));	 
				 	 	 	 
	 svg.selectAll(".groupinformation").remove();	 
	 svg.selectAll(".link").style("visibility", "visible");
	 svg.selectAll(".majorgroupnode").style("visibility", "visible");
	 svg.selectAll(".jobgroupnode").style("visibility", "visible");  
  
   drawlink_forward(d);
   
  
   links.forEach( function(l) 
	 {
       if (l.target.key == d.key) 	
       {         	
         	var thisgroupID = groupIDByIndex.get(l.source.name);
         	var contained_sign = -1;
         	
         	for (var i=0; i<coefarray.length; i++)
         	{
         		  if (coefarray[i].id == thisgroupID)
         		     contained_sign = 1;
         	}
         	
         	if (contained_sign == 1)
         	{         	         						  
	           //sendCloud.push(l.source.text);
						 //jobtext_pair.push({job: l.source.key, name: l.source.name, text: l.source.text});
						 if ( relatedjobnode.indexOf(l.source) < 0 )								                							                
						    relatedjobnode.push(l.source);
					}
		   }
   });
                      
    
   
   //coefarray.sort(function(a, b){return b.coef-a.coef});   	 	
   node.filter(function(e) { return e.id==d.id; }).classed("node--clicked", true).style("fill", colorBymajor.get(d.key));   
   
   
   node.filter( function(e) 
   { 
        var alreadyselected = 0;
        for (var i=0; i<selectedmajor.length; i++)
        {
            if (e.key == selectedmajor[i])
               alreadyselected = 1;
        }
        
        return alreadyselected == 0; 
   })
   .classed("node--faded", true);  
     
   
   linkedgroup = [];   
   
   for (var i=0; i<groupanditem.length; i++)
   	   linkedgroup[i] = 0;
   
      
   
   relatedjobnode.forEach(function(e) 
   {
   	   var printgroup = groupIDByIndex.get(e.name);   	                    	                 
   	   linkedgroup[printgroup]++;  	                 
   });
   
 
   
   addCareerSectorInfo(1);
     
   
   d3.selectAll(".jobgroupnode").filter(function(d) { return linkedgroup[d.data.index]>0; }).classed("connectjobgroupnode", true).style("fill", function(d) { return colorByindex.get(d.data.index); });
   
   
    
   if (selectedmajor.length==1)
      currentDbcText = selectedmajor[selectedmajor.length-1];
      
   else if (selectedmajor.length>1)  
   	  currentDbcText = selectedmajor.length + " Selected Majors"; 
      
   document.getElementById("mySelect").value = 'all';
   addTable(relatedjobnode);
   mouseclicktime = mouseclicktime + 1;
   
   drawSummaryWidget_Jobs();
}








function dblclkMajorArc(mgroupID) 
{
	  currentNodeClickingMode = 1;	
				 	 	 	 
	  svg.selectAll(".groupinformation").remove();	 
	  svg.selectAll(".link").style("visibility", "visible");
	  svg.selectAll(".majorgroupnode").style("visibility", "visible");
	  svg.selectAll(".jobgroupnode").style("visibility", "visible");  
  
    var linkcolor = majorarccolor(mgroupID);
    drawMGroupRibbons(mgroupID);
   
  
    links.forEach( function(d) 
	  {
	  	  var majorGroupName = d.target.id.substring(d.target.id.indexOf("@")+1, d.target.id.indexOf("|"));
    	  var thisGroupID = -1;
    	  
    	  if (majorplotmode == 1)
    	     thisGroupID = schoolname_short.indexOf(majorGroupName);
    	     
    	  else if (majorplotmode == 2)
    	  	 thisGroupID = areaname_short.indexOf(majorGroupName);
	  		  	
	  	
        if (thisGroupID == mgroupID) 	
        {         	
         	 var thisCareerSectorID = groupIDByIndex.get(d.source.name);
         	 var contained_sign = -1;
         	
         	 for (var i=0; i<coefarray.length; i++)
         	 {
         		   if (coefarray[i].id == thisCareerSectorID)
         		      contained_sign = 1;
         	 }
         	
         	 if (contained_sign == 1)
         	 {         	         						  
	            //sendCloud.push(d.source.text);
						  //jobtext_pair.push({job: d.source.key, name: d.source.name, text: d.source.text});		
						  if ( relatedjobnode.indexOf(d.source) < 0 )					                							          
						     relatedjobnode.push(d.source);
					 }
		    }
    });                       
   
   
    node.filter( function(e) 
    {         
        return selectedmajor.indexOf(e.key)>=0; 
    })
    .classed("node--clicked", true)
    .style( "fill", function(e) { return colorBymajor.get(e.key); } );
    
    
    node.filter( function(e) 
    { 
        return selectedmajor.indexOf(e.key)<0; 
    })
    .classed("node--faded", true);
   
   
   linkedgroup = [];   
   
   for (var i=0; i<groupanditem.length; i++)
   	   linkedgroup[i] = 0;
   
      
   
   relatedjobnode.forEach(function(e) 
   {
   	   var printgroup = groupIDByIndex.get(e.name);   	                    	                 
   	   linkedgroup[printgroup]++;  	                 
   });
   
 
   
   addCareerSectorInfo(1);
     
 
   d3.selectAll(".jobgroupnode").filter(function(d) { return linkedgroup[d.data.index]>0; }).classed("connectjobgroupnode", true).style("fill", function(d) { return colorByindex.get(d.data.index); });
   
   
    
   if (selectedmajor.length==1)
      currentDbcText = selectedmajor[selectedmajor.length-1];
      
   else if (selectedmajor.length>1)  
   	  currentDbcText = selectedmajor.length + " Selected Majors"; 
      
   document.getElementById("mySelect").value = 'all';
   addTable(relatedjobnode);
   mouseclicktime = mouseclicktime + 1;
   
   drawSummaryWidget_Jobs();
}











function plotRibbons()
{
	  svg.selectAll(".link")    			 	
    .attr("class", "ribbon")

    .attr('stroke-width', function (l)
	  {		  	
	  	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;			      	   
	  	    		  				      	   
		      if (thiscoef < 0.035)
				     thickness = 4;   
				      	      			      	   
				  else if (thiscoef > 0.035 && thiscoef < 0.1)
				     thickness = 9;
				      	      
				  else if (thiscoef >= 0.1 && thiscoef < 0.2) 
				     thickness = 16;  
				      	   	  
				  else if (thiscoef >= 0.2 && thiscoef < 0.3) 
				     thickness = 24;
				      	   	  
				  else if (thiscoef >= 0.3) 
		  	   	  thickness = 32;	       
				      	   	  	     	  	  				      	   
				  return 1.2*thickness;	
	  })

	  .attr("stroke", function(d){return colorBymajor.get(d.target.key);});

	  /* 
	  svg.selectAll(".link")    			 	
    .attr("class", "ribbon")
	  .attr("stroke", function(d){ var currentGroupID = groupIDByIndex.get(d.source.name); return colorByindex.get(currentGroupID);});
	  */
}



function drawMGroupRibbons(mgroupID)
{   
    var linkcolor = majorarccolor(mgroupID);
		var coef_threshold = 0.005;	  	  	  
	  var thiscoef = 0;
	  
	  svg.selectAll(".link").classed("fadedlink", true);
	  
	  //console.log(CoefMatrix);
    

    svg.selectAll(".link")    			 	
    .filter(function(d) 
    {     	  
    	  var majorGroupName = d.target.id.substring(d.target.id.indexOf("@")+1, d.target.id.indexOf("|"));
    	  var thisGroupID = -1;
    	  
    	  if (majorplotmode == 1)
    	     thisGroupID = schoolname_short.indexOf(majorGroupName);
    	     
    	  else if (majorplotmode == 2)
    	  	 thisGroupID = areaname_short.indexOf(majorGroupName);  
    	  	     	  	 
    	  var xx=d[0].name;               //job node id
				var yy=d[d.length-1].name;      //major node id								 				      	   
			  var idxx = groupIDByIndex.get(xx);
			  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
			  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;	  
			  		    	  	     	  	   	  	 
    	     
    	  return (mgroupID==thisGroupID) && (thiscoef >= coef_threshold);
    })
    .attr("class", "highlightlink")
    .attr('stroke-width', function (l)
	  {
	  	    if (selectedmajor.indexOf(l.target.key)<0)
	  	       selectedmajor.push(l.target.key);
	  	    	  			  	
	  	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);					  				  			      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;	
				  coefarray.push({coef: thiscoef, name: nameByIndex.get(idxx), id: idxx});		      	   
	  	    		  				      	   
		      if (thiscoef < 0.035)
				     thickness = 6;   
				      	      			      	   
				  else if (thiscoef > 0.035 && thiscoef < 0.1)
				     thickness = 9;
				      	      
				  else if (thiscoef >= 0.1 && thiscoef < 0.2) 
				     thickness = 16;  
				      	   	  
				  else if (thiscoef >= 0.2 && thiscoef < 0.3) 
				     thickness = 24;
				      	   	  
				  else if (thiscoef >= 0.3) 
		  	   	  thickness = 32;	       
				      	   	  	     	  	  				      	   
				  return thickness;	
	  })
    .attr("stroke", linkcolor);
}






function wordCloud(sendCloud) 
{	
	
			   	   
	  var words = [], visitedWords = [];
	  jWord.length = 0;
    jCount.length = 0;
	  
	  for (var w = 0; w < sendCloud.length; w++) 
    {
	      var currentGroup = sendCloud[w];
	      var currentSet = currentGroup.split("#"); 
		   
	      for (var v = 0; v < currentSet.length; v++)
		        words.push(currentSet[v]);
		}	     
	     	
		  
    for (var i = 0; i < words.length; i++)
        visitedWords.push(0);
	  
	  var frequency_list = [], word_list = [], count_list = [];	  
    var max_frequency = 0;
    
    
    
    for (var i = 0; i < words.length; i++)
	  {
	  	  if (words[i] == "arts")
           words[i] = "art";
              
        else if (words[i] == "artists")
           words[i] = "artist";
           	  
        else if (words[i] == "arboricultural")
           words[i] = "arboriculture";
           
        else if (words[i] == "athletic")
           words[i] = "athlete";
           
        else if (words[i] == "environmental")
           words[i] = "environment";
           
        else if (words[i] == "administrative")
           words[i] = "administration";
           
        else if (words[i] == "market")
           words[i] = "marketing";
	  }
    
   
    
	  for (var i = 0; i < words.length; i++)
	  {
	      if (visitedWords[i] == 0)
        {
           var currentWord = words[i];                      
           var filterornot = 0;
           
           for (var i1=0; i1<stopWords.length; i1++)
	         {
	             if (stopWords[i1]== currentWord || stopWords[i1] == currentWord+"s")
	                filterornot = 1;                           
	         }

	         if (filterornot==0 && currentWord!="" && currentWord!=" " && currentWord!="true" && currentWord!="false")
	         {          
	            var currentCount = 1;
              for (var j = i+1; j< words.length; j++)
	            {	            	
			            if (words[j]==currentWord || words[j]==currentWord+"s" || words[j]==currentWord+"ing")
		              {
			               visitedWords[j] = 1;
			               currentCount++;
			            }
		          }
		           		     
		          var wordfrequency = currentCount;
   	    	    	    
		    	        
		    	    if (wordfrequency > max_frequency) 
		    	        max_frequency = wordfrequency;  

              if (wordfrequency > 2)
		             frequency_list.push({text: currentWord, size: wordfrequency});
		        }
	       }
	   }
	   
	   
	   //console.log(frequency_list.length);
	   
	   frequency_list.sort(function(a, b){return b.size-a.size});	   
	   
	   var displaytag_num = 0, wordscalefactor = 1;
	   
	   if (frequency_list.length <= 150)
	   {
	      displaytag_num = Math.min(50, frequency_list.length);
	      wordscalefactor = cloudWidth/(4*max_frequency);
	   }
	      
	   else if (frequency_list.length > 150 && frequency_list.length <= 500)
	   {
	   	  displaytag_num = 56;
	   	  wordscalefactor = cloudWidth/(6*max_frequency);
	   }
	   	  
	   else if (frequency_list.length > 500 && frequency_list.length <= 1000)
	   {
	   	  displaytag_num = 62;
	   	  wordscalefactor = cloudWidth/(6*max_frequency);
	   }
	   	  
	   else if (frequency_list.length > 1000)
	   {
	   	  displaytag_num = 72;
	   	  wordscalefactor = cloudWidth/(8*max_frequency);
	   }
	   
//console.log(displaytag_num);
	   	   
	   for(var i = 0; i < displaytag_num; i++)
	   {
	   	  jWord[i] = frequency_list[i].text;	 
	   	  jCount[i] = frequency_list[i].size;	   	   
	   }
	   
	      jWord[displaytag_num] = "entertainment";	 
	   	 jCount[displaytag_num] = 100;	 
	   	 
	   	 jWord[displaytag_num+1] = "movie";	 
	   	 jCount[displaytag_num+1] = 195;	 
	   	 
	   	 jWord[displaytag_num+2] = "sports";	 
	   	 jCount[displaytag_num+2] = 265;
	   
	   /*
	     jWord[displaytag_num] = "economy";	 
	   	 jCount[displaytag_num] = 300;	 
	   
	    jWord[displaytag_num+1] = "math";	 
	   	 jCount[displaytag_num+1] = 220;	
	   	 
	   	 
	    jWord[displaytag_num+2] = "model";	 
	   	 jCount[displaytag_num+2] = 360;	 
	   */
	   	   	        
     var cloudW = d3.layout.cloud().size([cloudWidth/2, cloudHeight/2]);
     var wordsize = 0;   
     
        cloudW.words(d3.zip(jWord, jCount).map( function (d) 
        { 
        	
        	
        	
        	 wordsize = wordscalefactor*d[1];
        	/* 
        	 if (d[0] == "teaching" || d[0] == "java")
        	    wordsize = wordsize*2.7;
        	    
        	 if (d[0] == "database" || d[0] == "engineering" || d[0] == "investment")
        	    wordsize = wordsize*1.2;
        	    
        	 if (d[0] == "arboriculture" || d[0] == "laboratory")
        	    wordsize = wordsize*4;
        	*/
 
           /*
           if (d[0] == "communicate" || d[0] == "nonprofit" || d[0] == "public")
        	    wordsize = wordsize*2.5;
        	    
        	 if (d[0] == "social")  
        	    wordsize = wordsize*1.25;
        	    
        	 if (d[0] == "science" || d[0] == "develop" || d[0] == "management")  
        	    wordsize = wordsize*0.25;
           */
  
  if (d[0] == "software" || d[0] == "travel" )
     wordsize = wordsize*0.5;
  
 if (d[0] == "develop" || d[0] == "management" || d[0] == "technology" || d[0] == "academic" || d[0] == "administration")  
        	    wordsize = wordsize*0.35;
        	    
        	if (d[0] == "environment")
        	wordsize = wordsize*0.15;
        	    
    if (d[0] == "artist" || d[0] == "art" || d[0] == "athlete" || d[0] == "teaching" || d[0] == "sports" || d[0] == "appearance")  
        	    wordsize = wordsize*3;
  
 /*
   if (d[0] == "investment" || d[0] == "trading" || d[0] == "insurance")  
        	    wordsize = wordsize*2.4;


  if (d[0] == "analysis" || d[0] == "analytics")  
        	    wordsize = wordsize*1.6;
        	    
        	       if (d[0] == "technology" || d[0] == "environment" || d[0] == "operations" || d[0] == "science")  
        	    wordsize = wordsize*0.4;       
 
  if (d[0] == "communication")
     wordsize = wordsize*0.3;
 */       
        	 if (wordsize > cloudWidth/15)
        	    wordsize = cloudWidth/15;
        	    
        	 else if (wordsize < cloudWidth/125)
        	    wordsize = cloudWidth/125;
        	
        	 return { text: d[0], size: wordsize }; 
        }))
        .rotate(0)
        //.rotate(function() { return ~~(Math.random() * 2) * 90; })
        //.padding(3)
        .padding(function (d) { return Math.max(5, d.size/15); })
        .spiral('archimedean')
        //.spiral('rectangular')
        .font("Impact")
        .fontSize(function (d) { return d.size; });
     
        cloudW.on("end", draw);

     
     cloudW.start();             
}



  
function draw(words)             //draw tag cloud for major nodes 
{	
	  //console.log(words.length);

	  cloudwords = [];
	  cloudwords = words;	  
	
    cloudEl.selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function(d) { return d.size + "px"; })
    .style("font-family", "Impact")
    .style("fill-opacity", 0.7)
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {return "translate(" + [0.99*d.x, 0.99*d.y] + ")rotate(" + d.rotate + ")";})
    .text(function(d) { return d.text; })
    .on("click", function (d) 
    {
			 var words2 = getJobList(jobtext_pair, d.text);						       					       					       					       					       				     					       
		   keyword_selected = d.text;							       		       
			 popupbox1.render(words2);						       	
    }); 
}



function getJobList(pair, clicked_word) 
{	
    //console.log(clicked_word);   
	  var joblist = [];
	  
	  for (var w = 0; w < pair.length; w++) 
	  {
	  	  //console.log(pair[w]);  	
	      var currentGroup = pair[w].text;
	      var currentSet = currentGroup.split("#"); 
		   
	      for (var v = 0; v < currentSet.length; v++)
		    {
		        if (clicked_word == currentSet[v])
			      {
			         var tempstring = pair[w].job;
			         
				       				       
               var res = tempstring.split("#"); 
         	     var jobtitle = res[0] + " @ " + res[1];
				       
			         joblist.push(jobtitle);
				       break;
			      }
		    }		       
	  }
	  
    return joblist;
}







function setCloudColor()
{	  
	  if (cloudcolorsign == 0)
	  {	  
	     var cloudcolor = [];
	     
	
	     for (var w = 0; w < cloudwords.length; w++) 
	     {	     	     	   	     	   
	     	   var thisCloudWord = cloudwords[w].text;

	     	   if (thisCloudWord == "computer" || thisCloudWord == "algorithm" || thisCloudWord == "software" || thisCloudWord == "network" || thisCloudWord == "develop" || thisCloudWord == "java" || thisCloudWord == "database" || thisCloudWord == "engineering" || thisCloudWord == "technology")
	     	   	  cloudcolor.push(0);	  	       	   
	     	
	     	   else if (thisCloudWord == "management" || thisCloudWord == "manage" || thisCloudWord == "business" || thisCloudWord == "wholesale" || thisCloudWord == "sales" || thisCloudWord == "investment" || thisCloudWord == "marketing" || thisCloudWord == "financial" || thisCloudWord == "stock" || thisCloudWord == "insurance" || thisCloudWord == "trading")	
	     	      cloudcolor.push(2);	 
	     	      
	     	   else if (thisCloudWord == "social" || thisCloudWord == "nonprofit")
	     	   	  cloudcolor.push(3);
	     	   	  
	     	   else if (thisCloudWord == "communicate" || thisCloudWord == "communication" || thisCloudWord == "media" || thisCloudWord == "travel")
	     	      cloudcolor.push(4);
	     	      
	     	   else if (thisCloudWord == "justification" || thisCloudWord == "reasoning")
	     	    	cloudcolor.push(5);
	     	    	
	     	   else if (thisCloudWord == "design" || thisCloudWord == "arts" || thisCloudWord == "artists" || thisCloudWord == "perform" || thisCloudWord == "sports")
	     	    	cloudcolor.push(6);	  
	     	    	
	     	   else if (thisCloudWord == "teach" || thisCloudWord == "teaching" || thisCloudWord == "education") 
	     	   	  cloudcolor.push(7); 
	     	   	  
	         else if (thisCloudWord == "academic" || thisCloudWord == "laboratory" || thisCloudWord == "analysis" || thisCloudWord == "science" || thisCloudWord == "scientist")
	     	     	cloudcolor.push(8);	     	   	  
	     	   	  
	     	   else if (thisCloudWord == "operations" || thisCloudWord == "health" || thisCloudWord == "medicine" || thisCloudWord == "medical" || thisCloudWord == "drugs" || thisCloudWord == "patients") 
	     	   	  cloudcolor.push(9);  
	     	   	  
	     	   else if (thisCloudWord == "leadership" || thisCloudWord == "campaigns" || thisCloudWord == "voter" || thisCloudWord == "poll" || thisCloudWord == "public" || thisCloudWord == "administration" || thisCloudWord == "administrator")
	     	      cloudcolor.push(10);  
	     	      
	     	   else if (thisCloudWord == "environment" || thisCloudWord == "grew" || thisCloudWord == "climate")
	     	     	cloudcolor.push(11);
	     	   
	     	   else
	     	   {	     	
	     	      var sectorgroup = [];
	     	      sectorgroup[0] = 0;
	     	      sectorgroup[1] = 0;
	     	      sectorgroup[2] = 0;
	     	      sectorgroup[3] = 0;
	     	      sectorgroup[4] = 0;
	     	      sectorgroup[5] = 0;
	     	      sectorgroup[6] = 0;
	     	      sectorgroup[7] = 0;
	     	      sectorgroup[8] = 0;
	     	      sectorgroup[9] = 0;
	     	      sectorgroup[10] = 0;
	     	      sectorgroup[11] = 0;

	     		     	
	     	      for (var i1=0; i1<jobtext_pair.length; i1++)
	     	      {
	     	   	      var textString = jobtext_pair[i1].text;
	                var textSet = textString.split("#");             
	             
	                for (var v = 0; v < textSet.length; v++)
		              {
		                  if (thisCloudWord == textSet[v])
			                {
			                    var tempjobID = jobtext_pair[i1].jobID;			
			                    var tempsectorID = groupIDByIndex.get(tempjobID);    			                  
			         
			                    sectorgroup[tempsectorID]++;
			                }
		              }
	     	      }
	     	   	     	   
	     	      var maxRatio = -999;
	     	      var maxRatio_ID = -1;
	     	   
	     	      for (var i2=0; i2<12; i2++)
	     	      {
	     	   	      var thisRatio;	     	   	   
	     	   	      thisRatio= sectorgroup[i2]/groupanditem[i2].length;
	     	   	     
	     	   	      if (thisRatio > maxRatio)
	     	   	      {
	     	   	   	     maxRatio = thisRatio;
	     	   	   	     maxRatio_ID = i2;
	     	   	      }
	     	      }
	     	    	     	   
	  	        cloudcolor.push(maxRatio_ID);	  	     
	         }	     
	     }
                   
       cloudEl.selectAll("text")
       .data(cloudwords)
       .style("fill-opacity", 1.0)
       .style("fill", function(d, i) {return colorByindex.get(cloudcolor[i]); });
       
       cloudcolorsign = 1;
     }
     
     
     else if (cloudcolorsign == 1)
     {
     	 cloudEl.selectAll("text")
       .style("fill-opacity", 0.7)
       .style("fill", 'black');
       
       cloudcolorsign = 0;
     }
}












// Lazily construct the package hierarchy from class names.
function packageHierarchy(packages) 
{
	   //console.log(packages);
	
     var map = {};

     function find(id, data) 
     {
     	
     	  //console.log(id);
     	
        var node = map[id];
        if (!node) 
        {
        	 map[id] = data || {id: id, children: []};
           node = map[id];
           if (id.length) 
	         {
              node.parent = find(id.substring(0, id.indexOf("@")));
              node.parent.children.push(node);
              node.key = id.substring(id.indexOf("|")+1, id.length);
           }
        }
                    
        return node;
     }

     packages.forEach(function(d) 
     { /*    	  
     	  var thisid = d.id;    	  
     	  var nodename = thisid.substring(thisid.indexOf("@")+1, thisid.length);     	  
     	  if (nodename.length>1)
     	 */
           find(d.id, d);
     });

     return map[""];
}


// Return a list of imports for the given array of nodes.
function packageImports(nodes) 
{
     var map = {},
     imports = [];
  
     nodes.forEach(function(d)   // Compute a map from id to node.
     {  
        map[d.id] = d;
     });

     // For each import, construct a link from the source to target node.
     nodes.forEach(function(d) 
     {
                   if (d.imports) 
	                 d.imports.forEach(function(i) {
                                     imports.push({source: map[d.id], target: map[i]});
                   });
     });

     return imports;
}



function addTable(tablerows) 
{  
	  sendCloud = [];
	  jobtext_pair = [];
	  
	  //console.log(tablerows);
	  
	  for (var i1=0; i1<tablerows.length; i1++)
	  {
	      sendCloud.push(tablerows[i1].text);	      
	      //var thisgroup = tablerows[i1].id.substring((id.indexOf("@") + 1), id.indexOf("|"));	      
	      jobtext_pair.push({job:tablerows[i1].key,  jobID:tablerows[i1].name,  text:tablerows[i1].text});
	  }
	 
	  var DBLtext = document.createTextNode(currentDbcText);
	  
	  var currentDBLDiv = document.getElementById("currentdblclick");  
	  currentDBLDiv.innerHTML = "";
	  
	  currentDBLDiv.style.textAlign = "center";
	  
    var myTableDiv = document.getElementById("myDynamicTable");    
    myTableDiv.innerHTML = "";
        	  
	  var table = document.createElement('TABLE');           
                
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
     
    var entries = []; 
    for (var i=-1; i<tablerows.length; i++)
    {  
    	 if (i>=0) 	
    	 {    	  
    	    var jobkey = tablerows[i].key;
    	 
    	    var res = jobkey.split("#"); 
    	    var section1 = res[0].substring(res[0].indexOf("_")+1, res[0].length);
          var section2 = res[1];
          var section3 = res[4];
          var section4 = res[2] + ", " + res[3];  
          var section5 = res[0].substring(0, res[0].indexOf("_"));
    	 	 
    	    entries[i] = section1 + ", " + section2; 
    	 }
    	  
    	 //console.log(tablerows[i]);
    	
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);

       var td1 = document.createElement('TD');
       td1.width='25';
       td1.style.fontSize = "10px";
       if (i>=0)
          td1.appendChild(document.createTextNode(i));
       else 
       	  td1.appendChild(document.createTextNode(""));   
       tr.appendChild(td1);
       
       var td2 = document.createElement('TD');
       td2.width='100';
       td2.style.fontSize = "10px";
       if (i>=0)
          td2.appendChild(document.createTextNode(section1));
       else
       	  td2.appendChild(document.createTextNode("Title"));
       tr.appendChild(td2);  
       
       var td3 = document.createElement('TD');
       td3.width='100';
       td3.style.fontSize = "10px";
       if (i>=0)
          td3.appendChild(document.createTextNode(section2));
       else
          td3.appendChild(document.createTextNode("Employer"));
       tr.appendChild(td3);
       
       var td4 = document.createElement('TD');
       td4.width='100';
       td4.style.fontSize = "10px";
       if (i>=0)
          td4.appendChild(document.createTextNode(section4));
       else
       	  td4.appendChild(document.createTextNode("Place"));
       tr.appendChild(td4);
       
       var td5 = document.createElement('TD');
       td5.width='25';
       td5.style.fontSize = "10px";
       if (i>=0)
          td5.appendChild(document.createTextNode(section5));
       else
       	  td5.appendChild(document.createTextNode("ID"));   
       tr.appendChild(td5);
       
       
       
       
       var createClickHandler = function (row) 
                                { 
       	                         
       	                                 var cell0 = row.getElementsByTagName("TD")[0];
       	                                 var clickedindex = cell0.innerHTML;
       	                                 
       	                                 
       	                                 var thisjobnode = tablerows[clickedindex];       	                                 
       	                                 
       	                                 var cell4 = row.getElementsByTagName("TD")[4];
       	                                 var cell1 = row.getElementsByTagName("TD")[1];
       	                                 var cell2 = row.getElementsByTagName("TD")[2];
       	                                 var idcontent = cell4.innerHTML + "_" + cell1.innerHTML + " @ " + cell2.innerHTML;      	                        
       	                               	                        
                                         return function() 
                                         { 
                                      
                                            $(this).css("background", "#FFFF00"); 
                                             
                                            Linktojobwindow(thisjobnode.name);                                            
                                            
                                         };
                                };
       
    
       
       if (i>=0)
       {
       	  var currentRow = table.rows[i+1];
          currentRow.onclick = createClickHandler(currentRow);          
       }  
       
    }   
    
    
    currentDBLDiv.appendChild(DBLtext);    

    //$.searchterm2(entries);          
    
    myTableDiv.appendChild(table);   
}




function plotTagCloud()
{   
   var nocloudon = cloudEl.selectAll("text").empty();  
   
   if (nocloudon == true)
   {   
      cloudmode = 1;
   
      svg.selectAll(".majorgroupnode").style("visibility", "hidden");	  	 
	    svg.selectAll(".link").style("visibility", "hidden");		    
	    svg.selectAll(".highlightlink").style("visibility", "hidden");		    
	    svg.selectAll(".centraltext").style("visibility", "hidden");	
      //svg.selectAll(".subgroupnode").style("visibility", "hidden");	
 

 
	    divTip.html(wordCloud(sendCloud));
   }
   
   
   else if (nocloudon == false)
   {
   	  cloudmode = 0;	 
	    cloudEl.selectAll("text").remove();

   	  svg.selectAll(".majorgroupnode").style("visibility", "visible"); 	 
	    svg.selectAll(".link").style("visibility", "visible");
	    svg.selectAll(".highlightlink").style("visibility", "visible");	
	    svg.selectAll(".centraltext").style("visibility", "visible");	
      svg.selectAll(".subgroupnode").style("visibility", "visible");	
   }   
}







var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element


// Will be called when user starts dragging an element
function _drag_init(elem) 
{
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) 
{
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    
    if (selected !== null) {
    	  //console.log(selected);
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {selected = null;}



function cloudtagbox()
{
	  this.render = function(dialog) 
	  {	  		  	
	     	 //console.log(dialog);	  	
		     var winW = window.innerWidth;
	       var winH = window.innerHeight;
	       var dialogbox = document.getElementById('dialogbox');

		     dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	       dialogbox.style.top = "50px";
	       dialogbox.style.display = "block";		              
		              
		     var str1 = "Tag: [" + keyword_selected + "]";		              
		     var str2;
		     
		     if (currentNodeClickingMode==1)
		     {
		        str2 = "Current Chosen Major(s): ".fontsize(4).bold() + '<br>';	
		        
		        for (var i=0; i<selectedmajor.length; i++)
		            str2 = str2 + selectedmajor[i] + '<br>';
		     }	 
		        
		     else if (currentNodeClickingMode==2 || currentNodeClickingMode==3)
		     {
		     	  str2 = "Current Chosen Career Sector: ".fontsize(4).bold() + '<br>';  
		     	  str2 = str2 + selectedjobgroup;          
		     }         
		     	                     		              
		              
		     var str3 = "Related Job Position(s): ".fontsize(4).bold() + '<br>';
		              
		     for (var i=0; i<dialog.length; i++)
		     {
		         var hrefjobname = dialog[i].substring(0, dialog[i].indexOf("_"));
		         str3 = str3 + '<a href="javascript:Linktojobwindow(\''+hrefjobname+'\')"> <font color="#FFFF33"> '+dialog[i]+' </a>' + '<br>';
	       }
		              		
		     document.getElementById('dialogboxhead').innerHTML = str1;
		     document.getElementById('dialogboxbody1').innerHTML = str2;
	       //document.getElementById('dialogboxbody2').innerHTML = "Related Job Title(s): ".fontsize(4).bold() + '<br>' + showtext;	            
		              
		     document.getElementById('dialogboxbody2').innerHTML = str3;
		     document.getElementById('dialogboxfoot').innerHTML = '<button onclick="popupbox1.ok()">Close</button>';		              
	  }
	
	  this.ok = function(){document.getElementById('dialogbox').style.display = "none";}
	  
	  document.getElementById('dialogbox').onmousedown = function () {_drag_init(this); return false;};
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}



function Linktojobwindow(string)
{
	 	 
	 nodes.filter(function(n) { return !n.children; })
	 .forEach(function (d) 
   {  	       	      	       	      	     
   	     //var res = d.key.split("#");    
         //var jobtitle = res[0] + " @ " + res[1]; 
                        
         //console.log(jobtitle);

   	       //if (jobtitle == string)
   	     if (d.name == string)
   	     {
   	     	  selectedjob = d;	
   	     	  //console.log(string);     	     	        
   	     }  	     
   });
   
	 //jobwindow();


	 popupbox2.render();
}


function jobwindow()
{
	  this.render = function() 
	  {	  
	       var jobkey = selectedjob.key;	  
	       var jobimports = selectedjob.imports;
	       var jobtags = selectedjob.text.split("#");
  
	       var res = jobkey.split("#"); 
	  
	       $.post("insertjobnodetable.php", { job_title: res[0], employer: res[1], location_city: res[2], location_state: res[3] } ); 
	    
		     var winW = window.innerWidth;
	       var winH = window.innerHeight;
	       var dialogbox = document.getElementById('jobdialogbox');

		     dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	       dialogbox.style.top = "50px";
	       dialogbox.style.display = "block";
	                
                
	       var section1 = res[0].substring(res[0].indexOf("_")+1, res[0].length);
         var section2 = "Employer: ".bold() + res[1];
         var section3 = "Profile: ".bold() + res[4];
         var section4 = "Location: ".bold() + res[2] + ", " + res[3];    
    
         var section5 = "Related Majors: ".bold();
         var section6 = "Position Type: ".bold();
         var section7 = "Class Level: ".bold();
	                
	              
		     for (var i = 0; i < jobimports.length; i++)
         {
    	       var thisimporttype = jobimports[i].substring(0, jobimports[i].indexOf("@"));

    	       if (thisimporttype=="maj")
    	          section5 = section5 + jobimports[i].substring(jobimports[i].indexOf("|")+1, jobimports[i].length) + ", ";
    	       else if (thisimporttype=="pos")
    	          section6 = section6 + jobimports[i].substring(jobimports[i].indexOf("|")+1, jobimports[i].length) + ", ";
    	       else if (thisimporttype=="class")
    	          section7 = section7 + jobimports[i].substring(jobimports[i].indexOf("|")+1, jobimports[i].length) + ", ";    	  
         }


         if (section5[section5.length-2] == ",")     
            section5 = section5.substring(0, section5.length-2);
            
         if (section6[section6.length-2] == ",")
            section6 = section6.substring(0, section6.length-2);
            
         if (section7[section7.length-2] == ",")
            section7 = section7.substring(0, section7.length-2);
         
       
        
         var section8 = "Tag: ".bold();
    
         for (var i = 0; i < jobtags.length-1; i++)
             section8 = section8 + jobtags[i].substring(0, jobtags[i].length) + ", "; 
   
         section8 = section8 + jobtags[i].substring(0, jobtags[i].length);
    
         var section9 = "Description: ".bold();
         section9 = section9 + jobdsp[selectedjob.name-1].replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    
         var Head = section1.fontsize(5).bold() + "&nbsp;&nbsp;&nbsp;";    
    
         //var Body = section2.fontsize(3) + '<br><br>' + section3.fontsize(3) + '<br><br>' + section4.fontsize(3) + '<br><br>' + section6.fontsize(3) + '<br><br>' + section7.fontsize(3) + '<br><br>' + section5.fontsize(3) + '<br><br>' + section8.fontsize(3) + '<br><br>' + section9.fontsize(3);
         
		              		       
		     var Body = section2.fontsize(3) + '<br><br>' + section3.fontsize(3) + '<br><br>' + section4.fontsize(3) + '<br><br>' + section6.fontsize(3) + '<br><br>' + section7.fontsize(3) + '<br><br><br><br>' + section9.fontsize(3);
		     
		     
		     var savelink = '<button onclick="savetoShopCart()"> <font color="#0000FF" font size = "3px"> Save </button>';
		     
		            		
		     document.getElementById('jobdialogboxhead').innerHTML = Head + savelink + "&nbsp;&nbsp;&nbsp;" +  '<button onclick="popupbox2.ok()"> <font color="#0000FF" font size = "3px"> Close </button>' + '<br>';
		     

		     
		     document.getElementById('jobdialogboxbody').innerHTML = Body;
		     
		     document.getElementById("jobdialogboxbody").style.textAlign = "justify";
	               
		     document.getElementById('jobdialogboxfoot').innerHTML = '<button onclick="popupbox2.ok()"> <font color="#0000FF" font size = "3px"> Close</button>';	              
	  }
	
	  this.ok = function(){document.getElementById('jobdialogbox').style.display = "none";}
	  
	  document.getElementById('jobdialogbox').onmousedown = function () {_drag_init(this); return false;};
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;  
    
}





function savetoShopCart()
{
	  //console.log(selectedjob.key);
	  
	  var contained = 0;
	  for (var i=0; i<savedjobpost.length; i++)
	  {
	  	  if (savedjobpost[i] == selectedjob.name)
	  	     contained = 1;
	  }
	  
	  if (contained == 0)
	     savedjobpost.push(selectedjob.name);
	    
	    
	  //document.cookie = "favoritejob=" + ""; 	       
    //var cookievalue2 = savedjobpost.join("#"); 
    
    var cookievalue2="";
    
    for (var i=0; i<savedjobpost.length; i++)
    {
    	  cookievalue2 = cookievalue2 + savedjobpost[i];
    	  if (i<savedjobpost.length-1)
    	     cookievalue2 = cookievalue2 + "#";
    }
    
    
    document.cookie ="favoritejob=" + cookievalue2;                                                                      
}




function searchmajor()
{  
	  if (connectiondirection == "Major->Job")
		{	 
	     var element = document.getElementById('tags1'); 
	  
	     nodes.filter(function(n) { return !n.children; })
	     .forEach(function (d) 
       {   	     
		       if (d.key == element.value)
		       {					 			 					 
					 
					    divTip.transition()
              .duration(100)
              .style("opacity", .9)
              .style("font-size", "50px");		                                                                                 

              cloudEl.selectAll("text").remove(); //To clear the text for a new canvas					   
              selectedmajor.push(d.key);
                       
              $.post("insertmajornodetable.php", { majorname: d.key } ); 
              
              savedclick.push(d.key);                       						
						                                                  					        
					    mouseclk(d); 					 	    
				    } 	     
        });    
    }    
}




function refreshwindow()
{
	  savedclick = [];	  	  
	  jobtext_pair = [];
	  sendCloud = [];
	  selectedmajor = [];
	  selectedmajorarc = [];
	  
	  	  
	  document.cookie = "selectedinput=" + "";
    document.cookie = "clickincookie=" + ""; 	 
    //document.cookie = "favoritejob=" + ""; 	 
     
	  
	/*  
	  for (var loop=0; loop<childWindowHandles.length; loop++) 
    {
        if (!childWindowHandles[loop].closed)
            childWindowHandles[loop].close();
    }
	 */       


    
    window.location.reload();    
    window.scrollTo(0, 0); 
}









function clickjobnode(d) 
{
	  currentNodeClickingMode = 2;       
    svg.selectAll(".jobgroupnode").style("visibility", "visible");	  

    //sendCloud = [];
    //jobtext_pair = [];
    linkedgroup = [];
    
	  cloudEl.selectAll("text").remove();	 
  
 	  var currentGroupID = groupIDByIndex.get(d.name); 	  
 	  selectedjobgroup = nameByIndex.get(currentGroupID);	
 
 /*	  
 	  for (var i=0; i<groupanditem[currentGroupID].length; i++)
 	  {
 	      sendCloud.push(groupanditem[currentGroupID][i].text);
 	      jobtext_pair.push({job: groupanditem[currentGroupID][i].key, name: groupanditem[currentGroupID][i].name, text: groupanditem[currentGroupID][i].text});	
 	  }    
 */	
 	
	  node.classed("node--target", false).classed("node--source", false).classed("node--clicked", false);  	
	  node.classed("node--faded", false);  
	  node.classed("node--disappeared", false);  
	  
	  
	  
	  svg.selectAll(".highlightlink").classed("link", true);	 
	  
	  
	  svg.append("g").selectAll(".link")
	  .data(bundle(newlinks))
    .enter().append("path")
    .each(function(c) { c.source = c[0], c.target = c[c.length - 1]; })  
		.classed("link--target", function(l) { return l.source.source = false; })
    .classed("link--source", function(l) { return l.target.target = false; });	
	  	  	  
	  
	  svg.selectAll(".jobgroupnode").remove();	 
    addCareerSectorLabel();
    
    svg.selectAll(".jobgroupnode")
    .filter(function(e) { return e.data.index == groupIDByIndex.get(d.name); })
    .classed("connectjobgroupnode", true)
    .style("fill", function(d) { return colorByindex.get(d.data.index); });
	
	
	  var coefarray = [];    
    connectedmajornodes = [];
    
    for (var ii=0; ii<midjobnodearray[groupIDByIndex.get(d.name)].length; ii++)
    {
    	  var thismidnode = midjobnodearray[groupIDByIndex.get(d.name)][ii];
    	  
    	  //console.log(thismidnode);
    	  
    	  drawlink_backward(thismidnode);
	  }
    
    //coefarray.sort(function(a, b){return b.coef-a.coef});    
         
              
    //node.classed("node--target", function(n) { return n.target; })
        //.classed("node--source", function(n) { return n.source; }); 
     
        
    node.filter( function(e) 
    {    
        return (connectedmajornodes.indexOf(e.key) < 0); 
    })
    .classed("node--disappeared", true);   
    
    
    node.filter( function(e) 
    {    
        return (connectedmajornodes.indexOf(e.key) >= 0); 
    })
    .classed("node--target", true)
    .style("fill", function (e) {return colorBymajor.get(e.key);} );   
    
    drawSummaryWidget_Majors();          			                                                                          						   
}	





/*deselect major node, or right click the subgroup*/
function goback()
{			
	  cloudmode = 0;	
	  subgroupsign = 0;
	  currentNodeClickingMode = 0;
	  selectedsubgroupID = -1;
	  
	  relatedjobnode = [];		
	  connectedmajornodes = [];	
	 
	  cloudEl.selectAll("text").remove();

	  node.classed("node--faded", false);
	  node.classed("node--disappeared", false);	  
	  node.classed("node--target", false).classed("node--source", false).classed("node--clicked", false);  
	  
	  svg.selectAll(".subgroupnode").remove();	  
	  svg.selectAll(".centraltext").remove();	  
	  d3.selectAll(".halfwheel").remove();
	  svg.selectAll(".groupsizelabel").remove(); 

	  
	  if (subgrouparc)
	     subgrouparc.remove(); 

		
		svg.selectAll(".groupinformation").remove();	 
    addCareerSectorInfo(0);
	  
	  svg.append("g").selectAll(".link")
	  .data(bundle(newlinks))
    .enter().append("path")
    .each(function(c) { c.source = c[0], c.target = c[c.length - 1]; })  
		.classed("link--target", function(l) { return l.source.source = false; })
    .classed("link--source", function(l) { return l.target.target = false; });		
          
    svg.selectAll(".link").classed("fadedlink", false);
    
    
   svg.selectAll(".highlightlink")
   .attr("class", "link")
   .attr("stroke", "#A0A0A0");
   //.attr("stroke-width", 1);
     
    svg.selectAll(".node").style("fill", "black");
    
    if (connectiondirection == "Major->Job")
	     drawSummaryWidget_Jobs();
	     
	  else if (connectiondirection == "Major<-Job")
	  	 drawSummaryWidget_Majors();
	 
	
    var cookievalue;   
    
    cookievalue = selectedmajor.join("#"); 
    document.cookie="clickincookie=" + cookievalue;                                                                      
                                                             
    var showCookie = getCookie('clickincookie');              
    CookieSplit = showCookie.split("#");   
    
    document.getElementById("mySelect").value = 'none'; 
    var currentDBLDiv = document.getElementById("currentdblclick");  
	  currentDBLDiv.innerHTML = "";	  
    var myTableDiv = document.getElementById("myDynamicTable");    
    myTableDiv.innerHTML = "";       
       
    if ( CookieSplit.length>1 || (CookieSplit.length==1 && CookieSplit[0] != "") )  
    {                                                                  
       restoresaved(); 
       document.getElementById("mySelect").value = 'all';
    }  
  
                                                    
}




function goback2()
{
	  cloudmode = 0;	
	  subgroupsign = 0;
	  currentNodeClickingMode = 0;
	  selectedsubgroupID = -1;
	  
	  relatedjobnode = [];	
	  connectedmajornodes = [];
	  
	  savedclick = [];	  	  
	  jobtext_pair = [];
	  sendCloud = [];
	  selectedmajor = [];
	  selectedmajorarc = [];
	  
	  	  
	  document.cookie = "selectedinput=" + "";
    document.cookie = "clickincookie=" + ""; 	
    
    cloudEl.selectAll("text").remove();
	  
	  node.classed("node--faded", false);
	  node.classed("node--disappeared", false);	  
	  node.classed("node--target", false).classed("node--source", false).classed("node--clicked", false);  
	  
	  svg.selectAll(".subgroupnode").remove();	  
	  svg.selectAll(".centraltext").remove();
	  
	  d3.selectAll(".halfwheel").remove();
	  svg.selectAll(".groupsizelabel").remove(); 

	  
	  if (subgrouparc)
	  {
	  	 //console.log("draw sector!");
	     subgrouparc.remove(); 
	     //drawCareerSector();     
		}
		
		svg.selectAll(".groupinformation").remove();	 
    addCareerSectorInfo(0);
    
	 

   	   svg.selectAll(".majorgroupnode").style("visibility", "visible"); 	 
	     svg.selectAll(".link").style("visibility", "visible");
	     svg.selectAll(".highlightlink").style("visibility", "visible");	
	     svg.selectAll(".centraltext").style("visibility", "visible");	
       svg.selectAll(".subgroupnode").style("visibility", "visible");		 	 
    
	  
	  svg.append("g").selectAll(".link")
	  .data(bundle(newlinks))
    .enter().append("path")
    .each(function(c) { c.source = c[0], c.target = c[c.length - 1]; })  
		.classed("link--target", function(l) { return l.source.source = false; })
    .classed("link--source", function(l) { return l.target.target = false; });		
          
    svg.selectAll(".link").classed("fadedlink", false);
    
    svg.selectAll(".highlightlink")
    .attr("class", "link")
    .attr("stroke", "#A0A0A0");
    //.attr("stroke-width", 1);
        
    svg.selectAll(".node").style("fill", "black");
      	  
	  
	  if (connectiondirection == "Major->Job")
	     drawSummaryWidget_Jobs();
	     
	  else if (connectiondirection == "Major<-Job")
	  	 drawSummaryWidget_Majors();
	  
	  //d3.selectAll(".jobgroupnode").style("font-size", 30+"px").style("fill", "black");	  
	  //d3.selectAll(".jobgroupnode").remove();	  
	  //addCareerSectorLabel();
  
	  	  
	  //var topjobDiv = document.getElementById("TopJob");	  
	  //topjobDiv.innerHTML = "";
	  
	  //var myTableDiv = document.getElementById("SummaryTable");    
    //myTableDiv.innerHTML = "";
    
    /*
    var currentDBLDiv = document.getElementById("currentdblclick");
	  currentDBLDiv.innerHTML = "";	  
    var myTableDiv = document.getElementById("myDynamicTable");   
    myTableDiv.innerHTML = "";
    */
    
    document.getElementById("mySelect").value = 'none';   
    var currentDBLDiv = document.getElementById("currentdblclick");  
	  currentDBLDiv.innerHTML = "";	  
    var myTableDiv = document.getElementById("myDynamicTable");    
    myTableDiv.innerHTML = "";	                                                  
}





function restoresaved()
{	 
	
	 nodes.filter(function(n) { return !n.children; })
	 .forEach( function(d) 
	 {
	 	  for (var i=0; i<CookieSplit.length; i++)
	 	  {
	 	  	   if (CookieSplit[i] == d.key)                                   
              mouseclk(d);	 	 	       
	 	  }
	 });
}


function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 




function checkmajorplotmode() 
{
    var red = document.getElementById("red").checked;
    var blue = document.getElementById("blue").checked;
    //console.log(red);
    //console.log(blue);

    var returnmode = 0;

    
    if (red == true && blue == false) 
       returnmode = 1;
       
    if (red == false && blue == true) 
       returnmode = 2;   

    return returnmode;    
}



function openCareerSector(groupindex)
{	
	  if (careerfieldObject2[groupindex].subgroup.length>1) 
	  {		
       d3.selectAll(".groupinformation").remove();
       careersectorarc.remove();         
       d3.selectAll(".jobgroupnode").remove();  
        	
	     var halfwheel; 
	   
	     halfwheel = d3.svg.arc()
                    .innerRadius(innerRadius-250)
                    .outerRadius(innerRadius-130)
                    .cornerRadius(30)
                    .startAngle( 0.015 ) 
                    .endAngle( Math.PI - 0.015);

                                    
                                      
                                      
     svg.append("path")  
     .style("fill", colorByindex.get(groupindex) )
     .style("stroke", colorByindex.get(groupindex) ) 
     .attr("class", "halfwheel")                                                                                           
     .attr("d", halfwheel)
     .on("contextmenu", function (d, i) 
     {
            d3.event.preventDefault();	    
            
            //d3.selectAll(".halfwheel").remove();	
	          drawCareerSector();     		         
		        svg.selectAll(".jobgroupnode").remove();
		        cloudEl.selectAll("text").remove();	       
            addCareerSectorLabel();

            goback();           		              
     });

     
     drawsubgroup(groupindex);
     
     subgroupsign = 1;
     
   }
     
     

   if (careerfieldObject2[groupindex].subgroup.length==1)    
      subgroupsign = 0;       
                           
}






function drawCareerSector()
{
     arc.innerRadius(innerRadius-250) 
     .cornerRadius(50)
     .outerRadius(function(d) 
     { 
     	   //console.log(d.data.data);
     	   
     	   var thisindex = d.data.data;
     	        	       	       
       	 return innerRadius-200 + 40*Math.log2(thisindex);
     });
  
         
  
     careersectorarc = svg.attr("width", innerRadius)
                      .attr("height", innerRadius)
                      .append("g");
                          
     careersectorarc.selectAll(".careersectorarc")
     .data(pie(jobgrouparray))
     .enter().append("path")
     .style("fill", function (d) {return colorByindex.get(d.data.index); })
     //.style("stroke", function (d) {return colorByindex.get(d.data.index); })
     .attr("d", arc)                       
     .on("mousemove", function (d) 
     {
          mouseclickflag2 = 1;
          
     }) 
     .on("click", function (d) 
     {       	  	                    		   	              
		   	  if (cloudmode == 0)
         	{
             var midindex = Math.floor(groupanditem[d.data.index].length/2 + 0.5);
             var midjobnode = groupanditem[d.data.index][midindex];
                     	 
             if (connectiondirection == "Major<-Job")
             {
                currentDbcText = nameByIndex.get(d.data.index);   
                document.getElementById("mySelect").value = 'all';                   	 	   	   
		   	        addTable(groupanditem[d.data.index]);	 		   	                 
		   	        clickjobnode(midjobnode);  
		   	     }
		   	                 
		   	     else if (connectiondirection == "Major->Job")
		   	     {
		   	     	  document.getElementById("mySelect").value = 'all';
		   	     			   	                 	
		   	        if (selectedmajor.length == 0)
		   	        {
		   	           currentDbcText = nameByIndex.get(d.data.index);                      	 	   	   
		   	           addTable(groupanditem[d.data.index]);	 		
		   	        }
		   	                 	  
		   	        else if (selectedmajor.length > 0)
		   	        {
		   	            var relatedjobnodeofthis = [];
		   	            relatedjobnode.forEach(function(e) 
		   	            {
   	                    var printgroup = groupIDByIndex.get(e.name);
   	                 
   	                    if (printgroup == d.data.index)
   	                       relatedjobnodeofthis.push(e);	                 
   	                });
   	                           
   	                currentDbcText = "Related jobs in:  " + nameByIndex.get(d.data.index);                      	 	   	   
		   	            addTable(relatedjobnodeofthis);	
		   	        }   
		   	                 	  
		   	     }
		   	  }                    		   	                            
		  }) 		     
		  .on("dblclick", function (d) 
		  {   	     
         if (cloudmode == 0)
         {                                                     
            if (connectiondirection == "Major<-Job")            
               openCareerSector(d.data.index);                                 
         }                       
		  })
		  .on('mouseover',function() 
		  {		  	
         d3.select(this)
      	   .transition()
      	   .duration(200)
      	   .style('opacity', 0.85);
      })
      .on('mouseout',function () {
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 1.0);
      })
		  .on("contextmenu", function (d, i) 
		  {
            d3.event.preventDefault();
            if (cloudmode == 0)
            {
               if (connectiondirection == "Major<-Job" || cloudmode == 0)
               {
                  svg.selectAll(".jobgroupnode").remove();	
                  addCareerSectorLabel();
					        goback2();
					     }	
					  }
      });             
}






function addCareerSectorInfo(sign)
{
	  d3.selectAll(".groupinformation").remove();
	
	
	  grouptext = svg.attr("width", innerRadius)
                .attr("height", innerRadius)
                .append("g");
		
	  grouptext.selectAll("text")
    .data(pie(jobgrouparray))
    .enter().append("text")
    .attr("class", "groupinformation")
    .attr("transform",function(d)
    {
         return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor","middle")
    //.style("font-size", "54px")
    .style("font-weight", "bold")
    .style("fill", "white")
    .text(function(d)
    {         	
         var returnvalue = 0;
         	     
         if (sign == 0)
         	  returnvalue = d.data.data;
         	        
         else if (sign == 1)
         	  returnvalue = linkedgroup[d.data.index] + " / " + groupanditem[d.data.index].length; 

         return returnvalue;                       
    })                      
    .on("mousemove", function (d) 
    {
         mouseclickflag2 = 1;
    }) 
    .on("click", function (d) 
    { 	   	                    
		   if (cloudmode == 0)
       {
          var midindex = Math.floor(groupanditem[d.data.index].length/2 + 0.5);
          var midjobnode = groupanditem[d.data.index][midindex];                     	 
		   	                 
		   	  if (connectiondirection == "Major<-Job")
          {
              currentDbcText = nameByIndex.get(d.data.index);                      	 	   	   
		   	      addTable(groupanditem[d.data.index]);	 		   	                 
		   	      clickjobnode(midjobnode);  
		   	  }
		   	                 
		   	  else if (connectiondirection == "Major->Job")
		   	  {		   	                 	 
		   	      if (selectedmajor.length == 0)
		   	      {
		   	         currentDbcText = nameByIndex.get(d.data.index);                      	 	   	   
		   	         addTable(groupanditem[d.data.index]);	 		
		   	      }
		   	                 	  
		   	      else if (selectedmajor.length > 0)
		   	      {
		   	         var relatedjobnodeofthis = [];
		   	         
		   	         relatedjobnode.forEach(function(e) 
		   	         {
   	                 var printgroup = groupIDByIndex.get(e.name);
   	                 
   	                 if (printgroup == d.data.index)
   	                    relatedjobnodeofthis.push(e);	                 
   	             });
   	                           
   	             currentDbcText = "related jobs in:  " + nameByIndex.get(d.data.index);                      	 	   	   
		   	         addTable(relatedjobnodeofthis);	
		   	      }  	  
		   	                 	  
		   	   }
		    }                   		   	                            
		 }) 
		 .on("dblclick", function (d) 
		 {   	     
        if (cloudmode == 0)
        {                                          
           if (connectiondirection == "Major<-Job")            
              openCareerSector(d.data.index);                                 
        }                       
		 })
		 .on("contextmenu", function (d, i) 
		 {
        d3.event.preventDefault();
        if (cloudmode == 0)
        {
           if (connectiondirection == "Major<-Job" || cloudmode == 0)
           {
              svg.selectAll(".jobgroupnode").remove();	
              addCareerSectorLabel();
					    goback2();
				   }	
			  }
     });
}






function addCareerSectorLabel()
{
	  jobgroupnodeangle = [];

    groupnode.data(pie(jobgrouparray))
    .enter().append("g")
    .attr("class", "jobgroupnode")
    .append("text")
    .each(function (d) { d.angle = (d.startAngle + d.endAngle + d.padAngle) / 2 - d.padAngle ; jobgroupnodeangle.push(d.angle);})
    .attr("dy", ".35em") 
    .attr("transform", function (d) 
    {   
    	   var thisHeight = innerRadius-200 + 40*Math.log2(d.data.data);
    	        	                                 
         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" +(thisHeight+30)+ ",0)" + (d.angle * 180 / Math.PI < 180 ? "" : "rotate(180)");
    })      
    .style("text-anchor", function (d) { return d.angle > Math.PI ? null : "start"; })                    
    .attr("id", function (d)
    {
       	 return d.data.index;
    })
    .text(function (d) 
    {    
       	 return nameByIndex.get(d.data.index);       	     
    });   
}




var connectionlines;

function plotConnectionLines()
{
	  var thickness = 1;	
	  
	  //console.log(bundle(newlinks));   

	  connectionlines = svg.selectAll(".link")
	  .data(bundle(newlinks))
    .enter().append("path")
    .each(function(c) { c.source = c[0], c.target = c[c.length - 1]; })			 
		.each(function (l) 
		{ 		      	   				      	   
				this.parentNode.appendChild(this); 
		})
	  .attr("class", "link")	   	    
    .attr("d", line);    
}








function drawlink_forward(d)
{
		var linkcolor = colorBymajor.get(d.key);
		var coef_threshold = 0.005;	  	  	  
	  var thiscoef = 0;
	  
	  svg.selectAll(".link").classed("fadedlink", true);
	  
		  
    svg.selectAll(".link")    			 
    .filter(function(l) 
    { 
    	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;		
				    				  	      	   
    	    return (l.target === d || l.source === d)&&(thiscoef >= coef_threshold); 
    })
    //.classed("link--target", function(l) { if (l.target === d && thiscoef >= coef_threshold) return l.source.source = true; })
    //.classed("link--source", function(l) { if (l.source === d && thiscoef >= coef_threshold) return l.target.target = true; })		
    .attr("class", "highlightlink")
    .attr('stroke-width', function (l)
	  {		 	
	  	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;			     	   
				  coefarray.push({coef: thiscoef, name: nameByIndex.get(idxx), id: idxx});				  				  
		      	   
		      if (thiscoef < 0.035)
				     thickness = 6;   
				      	      			      	   
				  else if (thiscoef > 0.035 && thiscoef < 0.1)
				     thickness = 9;
				      	      
				  else if (thiscoef >= 0.1 && thiscoef < 0.2) 
				     thickness = 16;  
				      	   	  
				  else if (thiscoef >= 0.2 && thiscoef < 0.3) 
				     thickness = 24;
				      	   	  
				  else if (thiscoef >= 0.3) 
		  	   	  thickness = 32;	  
		  	   
		  	  //console.log(CoefMatrix[idxx][idyy]); 	  
		  	  //console.log(groupanditem[idxx].length);
		  	   	       
				      	   	  	     	  	  				      	   
				  return thickness;	
	  })
	  .attr("stroke", linkcolor );
}




function drawlink_backward(d)
{
	  var currentGroupID = groupIDByIndex.get(d.name);
	  var linkcolor = colorByindex.get(currentGroupID);
	  var coef_threshold = 0.03;	       	 	  
	  var thiscoef = 0;
	  
	  svg.selectAll(".link").classed("fadedlink", true);
	  
		  
    svg.selectAll(".link")    			 
    .filter(function(l) 
    { 
    	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;		
				    
				  	      	   
				  return (l.target === d || Math.abs(l.source.x - d.x) <= 0.01 )&&(thiscoef >= coef_threshold); 
    	    //return (l.target === d || l.source === d)&&(thiscoef >= coef_threshold); 
    })
    //.classed("link--target", function(l) { if (l.target === d && thiscoef >= coef_threshold) return l.source.source = true; })
    //.classed("link--source", function(l) { if (Math.abs(l.source.x - d.x) <= 0.01 && thiscoef >= coef_threshold) return l.target.target = true; })		
    .attr("class", "highlightlink")
    .attr('stroke-width', function (l)
	  {		  	
	  	    var xx=l[0].name; 
				  var yy=l[l.length-1].name; 				      	   
				  var idxx = groupIDByIndex.get(xx);
				  var idyy = majorIDByIndex.get(yy);				      	   
				      	   
				  thiscoef = CoefMatrix[idxx][idyy]/groupanditem[idxx].length;			      	   
				  coefarray.push({coef: thiscoef, name: nameByIndex.get(idxx), id: idxx});				  
				  
				  if (d.id.substring(0, d.id.indexOf("@"))=="empl")
	  	       connectedmajornodes.push(l.target.key);	
	  	    		  				      	   
		      if (thiscoef < 0.035)
				     thickness = 6;   
				      	      			      	   
				  else if (thiscoef > 0.035 && thiscoef < 0.1)
				     thickness = 9;
				      	      
				  else if (thiscoef >= 0.1 && thiscoef < 0.2) 
				     thickness = 16;  
				      	   	  
				  else if (thiscoef >= 0.2 && thiscoef < 0.3) 
				     thickness = 24;
				      	   	  
				  else if (thiscoef >= 0.3) 
		  	   	  thickness = 32;	       
				      	   	  	     	  	  				      	   
				  return thickness;	
	  })
	  .attr("stroke", linkcolor );
}




var thissubgrouparray = [];
var objectarray = [];

function drawsubgroup(groupindex)
{	
	   thissubgrouparray = [];
	
	   for (var i=0; i<careerfieldObject2[groupindex].subgroup.length; i++)   
       	 thissubgrouparray.push({index: i, data: careerfieldObject2[groupindex].subgroup[i].length});    
       	 
       	      	 
     objectarray = []; 
           
     for (var v=0; v<careerfieldObject2[groupindex].subgroup.length; v++)    
     {      
         var currentgroupobject = new Object();              
         currentgroupobject.major = [];  
         currentgroupobject.major_num = [];                                     
          
         currentgroupobject.positiontype_volunteer = [];       	          	  
         currentgroupobject.positiontype_internship = []; 
         currentgroupobject.positiontype_ftentrylevel = [];
         currentgroupobject.positiontype_ftexperienced = []; 
                  
         currentgroupobject.classlevel_freshman = [];       	          	  
         currentgroupobject.classlevel_sophomore = []; 
         currentgroupobject.classlevel_junior = [];
         currentgroupobject.classlevel_senior = [];
         currentgroupobject.classlevel_graduate = []; 
         currentgroupobject.classlevel_alumni = [];
         currentgroupobject.classlevel_unspecified = [];
           
         
         var majornum = 0;                                        
           
         for (var w = 0; w < careerfieldObject2[groupindex].subgroup[v].length; w++) 
	       {         	
	           var thisimports = careerfieldObject2[groupindex].subgroup[v][w].imports;                                                            	              
	           for (var j = 0; j < thisimports.length; j++)  
	           {
	               var thisimporttype = thisimports[j].substring(0, thisimports[j].indexOf("@"));              	  
	               var temp = thisimports[j].substring(thisimports[j].indexOf("|")+1, thisimports[j].length);  	  
    	     	  
    	           if (thisimporttype=="maj")
                 {	                    	           	              	                   	     
	                  var contained = 0;	              	     
	                  for (var i = 0; i < currentgroupobject.major.length; i++)
	                  {
	              	      if (currentgroupobject.major[i] == temp)
	              	      {
	              	         contained = 1;
	              	         currentgroupobject.major_num[i]++;
	              	      }
	                  }
	              	     
	                  if (contained == 0)
	                  {	              	     	
	              	     currentgroupobject.major.push(temp);
	              	     currentgroupobject.major_num[majornum] = 1;
	              	     majornum++;
	                  }              	     	              	     
	               }	
	               	                                	  
	              	  	              	  
	               else if (thisimporttype=="pos")
                 {
                 	  if (temp == "Volunteer " || temp == "Co-op ")
                 	     currentgroupobject.positiontype_volunteer.push(careerfieldObject2[groupindex].subgroup[v][w]);
                 	                   	     	                                  	                  	 
                    else if (temp == "Externship " || temp == "Fellowship " || temp == "Internship " || temp == "Temporary/Seasonal " || temp == "Part-time entry-level " || temp == "Part-time experienced ")
                       currentgroupobject.positiontype_internship.push(careerfieldObject2[groupindex].subgroup[v][w]);                    	    
                    	                       	                     	         
                    else if (temp == "Full-time entry-level ")
                       currentgroupobject.positiontype_ftentrylevel.push(careerfieldObject2[groupindex].subgroup[v][w]);  
                    	  
                    else if (temp == "Full-time experienced " || temp == "Full Time-Mid-Career ")
                       currentgroupobject.positiontype_ftexperienced.push(careerfieldObject2[groupindex].subgroup[v][w]);                      	                         	
                 }
                                                       
                
                 else if (thisimporttype=="class")
                 {  	                	
                	  if (temp == "Freshman")
                       currentgroupobject.classlevel_freshman.push(careerfieldObject2[groupindex].subgroup[v][w]);
                            	     	                                  	                  	 
                 	  else if (temp == "Sophomore")
                    	 currentgroupobject.classlevel_sophomore.push(careerfieldObject2[groupindex].subgroup[v][w]);                    	    
                    	                       	                     	         
                    else if (temp == "Junior")
                       currentgroupobject.classlevel_junior.push(careerfieldObject2[groupindex].subgroup[v][w]);  
                    	  
                    else if (temp == "Senior")
                       currentgroupobject.classlevel_senior.push(careerfieldObject2[groupindex].subgroup[v][w]); 
                      
                    else if (temp == "Graduate Student")
                       currentgroupobject.classlevel_graduate.push(careerfieldObject2[groupindex].subgroup[v][w]); 
                      
                    else if (temp == "Alumni")
                       currentgroupobject.classlevel_alumni.push(careerfieldObject2[groupindex].subgroup[v][w]); 
                      
                    else
                       currentgroupobject.classlevel_unspecified.push(careerfieldObject2[groupindex].subgroup[v][w]);                    	                         	
                 }                                                                    	              	              	               	                	  	              	  	              	 	              	  
	            }	                                        	         
	        }
	        
	        var midindex = Math.floor( 5000*(v+0.5)/careerfieldObject2[groupindex].subgroup.length );        
	        currentgroupobject.midnode = nodes[midindex];	        
	        objectarray.push(currentgroupobject);
	    }
            

/*
      newlinks2 = [];
         
      for (var t = 0; t < objectarray.length; t++)  
	    { 
          CoefMatrix2[t] = [];
          
          //var midindex = Math.floor( 5000*(t+0.5)/objectarray.length );
          var midjobnode = objectarray[t].midnode;
          
          //console.log(midjobnode);
           
          midjobnode.x = 180*(t+0.5)/objectarray.length;                   
           
          for (var s = 0; s < majornode.length; s++)           
          {    
           	  CoefMatrix2[t][s] = 0;       	           	   
           	     
           	  for (var r = 0; r < objectarray[t].major.length; r++)
           	  {
           	    	if (majornode[s].key == objectarray[t].major[r])
           	    	{      	    	   	            	    	   	           	    	   	            	    	   	            	    	   	  
           	    	   CoefMatrix2[t][s] = objectarray[t].major_num[r];
           	    	   newlinks2.push({source: midjobnode, target: majornode[s]});
           	    	}   
           	  }	          	        
          }
      } 	 
       	 
*/       	  
      
      
     arc3.innerRadius(innerRadius-110) 
     .cornerRadius(50)
     .outerRadius(function(d) 
     {      	   
     	   var thisindex = d.data.data;    	       	       
       	 return innerRadius + 70*Math.log(thisindex);
     });
      
 
     subgrouparc = svg.attr("width", innerRadius)
                   .attr("height", innerRadius)
                   .append("g");
                       //.attr("transform", "translate(" + 0.05*translateX + "," + 0.05*translateY + ")");
   
     subgrouparc.selectAll("path")
     .data(pie(thissubgrouparray))
     .enter().append("path")
     .style("fill", "white")
     .style("fill-opacity", 0.2)
     .style("stroke", "black")
     .style("stroke-width", 10)    
     .attr("d", arc3)
     .on("mousedown", function (d) 
     {
           mouseclickflag1 = 0;
      }) 
      .on("mousemove", function (d) 
      {
           mouseclickflag1 = 1;
      }) 
      .on("mouseup", function (d) 
      {
     	   if (mouseclickflag1 == 0)
         {
         	  selectedsubgroupID = d.data.index;
            currentDbcText = nameByIndex.get(groupindex) + " - " + careerfieldObject2[groupindex].subgroup_name[d.data.index];	 
            document.getElementById("mySelect").value = 'all'; 
            addTable( careerfieldObject2[groupindex].subgroup[d.data.index] );             	 
            clicksubgroup(groupindex, d.data.index, objectarray[d.data.index].midnode);
            drawSummaryWidget_Jobs();
         }
      })
      .on("contextmenu", function (d, i) 
      {
         d3.event.preventDefault();
         //d3.selectAll(".halfwheel").remove();	
	       drawCareerSector();     
		         
		     svg.selectAll(".jobgroupnode").remove();	
		     cloudEl.selectAll("text").remove();       
         addCareerSectorLabel();            

         goback();
      });	
       
 
   
     groupsizelabel.data(pie(thissubgrouparray))
     .enter().append("g")
     .attr("class", "groupsizelabel")
     .append("text")
     .each(function (d) { d.angle = (d.startAngle + d.endAngle + d.padAngle) / 2 - d.padAngle ; })
     .attr("dy", ".35em") 
     .attr("transform", function (d) 
     {
     	      var thisindex = d.data.data;    
       	   var thisradius = innerRadius + 20*Math.log(thisindex);            	             	                                  
           
           return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" +(thisradius)+ ",0)" + (d.angle * 180 / Math.PI < 180 ? "" : "rotate(180)");
     })      
     //.style("text-anchor", function (d) { return d.angle > Math.PI ? null : "end"; }) 
     .attr("text-anchor", "middle")
     .text(function (d) { return d.data.data; }); 
      
      
   
     
       
       
       
       subgroupnode.data(pie(thissubgrouparray))
       .enter().append("g")
       .attr("class", "subgroupnode")
       .append("text")
       .each(function (d) { d.angle = (d.startAngle + d.endAngle + d.padAngle) / 2 - d.padAngle ; })
       .attr("dy", ".35em") 
       .attr("transform", function (d) 
       {     
       	
       	 var thisindex = d.data.data;    	       	       
       	 var thisradius = innerRadius + 40 + 70*Math.log(thisindex);
                       
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" +(thisradius)+ ",0)" + (d.angle * 180 / Math.PI < 180 ? "" : "rotate(180)");
       })      
       .style("text-anchor", function (d) { return d.angle * 180 / Math.PI < 180 ? null : "end"; })
       //.style("text-anchor", function (d) { return d.angle > Math.PI ? null : "end"; })
       
       //.style("fill", "#dd4477")
       
       .text(function (d) 
       {    	            	     	  
       	    
       	     return careerfieldObject2[groupindex].subgroup_name[d.data.index];        	     
       });                         	   					   
}




function clicksubgroup(groupindex, subgroupindex, d)
{	
	   currentNodeClickingMode = 3;  
	   subgrouparc.style("fill", "white");
	
	   subgrouparc.selectAll("path")
     .data(pie(thissubgrouparray))
     .style("fill", function(d, i) 
     {
         	 if (i==subgroupindex)
         	    return colorByindex.get(groupindex);
         	    
         	 else
         	 	  return "white";
     });         	              
}



function mouseovermajornode(d)
{	
  	var element = document.getElementById('radiustext');  
	  var currentvalue = Number(element.value);	  
	  
	  
	  var alreadyclicked = 0;
	  for (var i=0; i<savedclick.length; i++)
	  {
	  	  if (d.key == savedclick[i])
	  	     alreadyclicked = 1;
	  }
	  	  
	  
	  if (currentvalue>=2 && connectiondirection=="Major->Job")
	  {	  	
	  	 var shift1 = 180/160;
	     shift1 = shift1*(currentvalue-1);
	     var shift2 = 2*shift1;
	  		  	
	     node.filter(function(e) { return Math.abs(d.x-e.x)<=shift1; })
       .attr("transform", function(e) 
       {
    	      var rot = d.x + 1.9*(e.x - d.x);  	
    	      return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
       })
	     .classed("node--fisheyed", function(e) { return e; })
	     .style("fill", function (e) {return colorBymajor.get(e.key);} );
	     
	     
	     if (alreadyclicked==0)
	  	 {
	        node.filter(function(e) { return d.x==e.x; })
	        .attr("transform", function(e) 
          {
    	         var rot = d.x + 1.9*(e.x - d.x);  	
    	         return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
          })
	        .classed("node--hovered", function(e) { return e; })
	            .style("fill", "black");
	     }
	     
	     
	     else if (alreadyclicked==1)
	  	 {
	        node.filter(function(e) { return d.x==e.x; })
	        .attr("transform", function(e) 
          {
    	         var rot = d.x + 1.9*(e.x - d.x);  	
    	         return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
          })
	        .classed("node--fisheyeclicked", function(e) { return e; })
	        .style("fill", "red");
	     }        
	  
	     node.filter(function(e) { return e.x-d.x > shift1; })
       .attr("transform", function(e) 
       {
    	      var scale1 = (360 - d.x - shift2)/(360 - d.x - shift1);
    	      var rot = 360 - scale1*(360 - e.x);
    	
    	      return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
       });
   


	     node.filter(function(e) { return e.x-d.x < -shift1; })
       .attr("transform", function(e) 
       {
    	      var scale2 = (d.x - 180 - shift2)/(d.x - 180 - shift1);
    	      var rot = 180 + scale2*(e.x - 180);
    	
    	      return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
       });	    
	  }
	  
	  
	  else
	  {
	  	 if (alreadyclicked==0)
	  	 {
	  	 	  node.filter(function(e) { return d.x==e.x; })
	        .attr("transform", function(e) 
          {
    	         var rot = d.x + 1.9*(e.x - d.x);  	
    	         return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
          })
	        .classed("node--hovered", function(e) { return e; });
	  	 }
	  	
	     else if (alreadyclicked==1)
	     {
	  	    node.filter(function(e) { return d.x==e.x; })
	        .attr("transform", function(e) 
          {
    	         var rot = d.x + 1.9*(e.x - d.x);  	
    	         return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
          })
	        .classed("node--fisheyeclicked", function(e) { return e; });
	     }
	  }
	  
}



function mouseoutmajornode(d)
{
	  node.attr("transform", function(e) 
    {
    	  var rot = e.x;
    	
    	  return "rotate(" + (rot - 90) + ")translate(" +(e.y -140 + 8)+ ",0)" + (e.x < 180 ? "" : "rotate(180)");
    })
    .classed("node--hovered", false)
	  .classed("node--fisheyed", false)
	  .classed("node--fisheyeclicked", false);
	  

}



function minusradius()
{
	  var element = document.getElementById('radiustext');
	  //console.log(element.value);
	  
	  var currentvalue = element.value;
	  
	  if (Number(currentvalue)>=2)	  
	     document.getElementById("radiustext").value = Number(currentvalue)-1;
}


function addradius()
{
	  var element = document.getElementById('radiustext');
	  //console.log(element.value);
	  
	  var currentvalue = element.value;
	  
	  if (Number(currentvalue)<=5)	  
	     document.getElementById("radiustext").value = Number(currentvalue)+1;
}



function drawmajornode()
{
	     var majornodeangle = jobarc_angle/jsonfilename1; 
       var othernodeangle = majorarc_angle/151;    
       
       
       node = node.data(nodes.filter(function(n) { return (!n.children)&&(n.id.substring(0, n.id.indexOf("@"))=="maj"); }))
              .enter().append("text")
              .attr("class", "node")
				      .attr("dx", function (d) { return d.x < 180 ? 10 : -10; })
              .attr("dy", "0.31em") 
              .attr("transform", function(d) 
	            {               		            	  	
                 var deep;                                                 
		             var did;		             
		             	  
		             if (majorplotmode == 1)
		             {
		             	     if (school_SAS.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SAS.indexOf(d.key));
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SAS" + part3;	
		             	      	schoolandmajor[0].push(d);	 
		             	      	majorgroupIDByIndex.set(d.name-5012, 0);            	  	 
		             	     }
		             	  
		             	     else if (school_SEBS.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SEBS.indexOf(d.key)+school_SAS.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SEBS" + part3;
		             	  	    schoolandmajor[1].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 1); 
		             	     }   
		             	  
		             	     else if (school_MGSA.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_MGSA.indexOf(d.key)+school_SAS.length+school_SEBS.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "MGSA" + part3;
		             	  	    schoolandmajor[2].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 2); 
		             	     }
		             	  
		             	     else if (school_EMSP.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_EMSP.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "EMSP" + part3;
		             	  	    schoolandmajor[3].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 3); 
		             	     }
		             	  
		             	     else if (school_RBS.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_RBS.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "RBS" + part3;
		             	  	    schoolandmajor[4].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 4); 
		             	     }
		             	  
		             	     else if (school_SCI.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SCI.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SCI" + part3;
		             	  	    schoolandmajor[5].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 5); 
		             	     }
		             	  
		             	     else if (school_SOE.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SOE.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length+school_SCI.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SOE" + part3;
		             	  	    schoolandmajor[6].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 6); 
		             	     }
		             	  
		             	     else if (school_EBSPPP.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_EBSPPP.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length+school_SCI.length+school_SOE.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "EBSPPP" + part3;
		             	  	    schoolandmajor[7].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 7); 
		             	     }
		             	  
		             	     else if (school_SMLR.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SMLR.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length+school_SCI.length+school_SOE.length+school_EBSPPP.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SMLR" + part3;
		             	  	    schoolandmajor[8].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 8); 
		             	     }
		             	  
		             	     else if (school_SSW.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_SSW.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length+school_SCI.length+school_SOE.length+school_EBSPPP.length+school_SMLR.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "SSW" + part3;
		             	  	    schoolandmajor[9].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 9); 
		             	     }
		             	  
		             	     else if (school_Other.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(school_Other.indexOf(d.key)+school_SAS.length+school_SEBS.length+school_MGSA.length+school_EMSP.length+school_RBS.length+school_SCI.length+school_SOE.length+school_EBSPPP.length+school_SMLR.length+school_SSW.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	      	did = part1 + "Other Majors" + part3;
		             	     	  schoolandmajor[10].push(d);
		             	     	  majorgroupIDByIndex.set(d.name-5012, 10); 
		             	     }          	  	             	  	             	  
		                }
		             
		             
                    else if (majorplotmode == 2)
		                {
		                   if (area_BAES.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_BAES.indexOf(d.key));
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Bio, Agri & Env Majors" + part3;	
		             	  	    areaandmajor[0].push(d);	
		             	  	    majorgroupIDByIndex.set(d.name-5012, 0);              	  	 
		             	     }
		             	     		            	     
		             	     else if (area_Physical.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Physical.indexOf(d.key)+area_BAES.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Physical Science Majors" + part3;
		             	  	    areaandmajor[1].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 1); 
		             	     }
		             	     
		             	     else if (area_CMS.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_CMS.indexOf(d.key)+area_BAES.length+area_Physical.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Comp, Math & Stats Majors" + part3;
		             	  	    areaandmajor[2].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 2); 
		             	     }
		             	     
		             	     else if (area_Engineering.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Engineering.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Engineering Majors" + part3;
		             	  	    areaandmajor[3].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 3); 
		             	     }
		             	     		             	  
		             	     else if (area_Business.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Business.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Business Majors" + part3;
		             	  	    areaandmajor[4].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 4); 
		             	     } 		             	     		             	                	       
		             	  
		             	     else if (area_Communications.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Communications.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Communications Majors" + part3;
		             	  	    areaandmajor[5].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 5); 
		             	     }
		             	          
		             	     else if (area_Other.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Other.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Unspecified" + part3;
		             	  	    areaandmajor[6].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 6); 
		             	     }		             	                  	     
		             	  
		             	     else if (area_Social.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Social.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length+area_Other.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Social Science Majors" + part3;
		             	  	    areaandmajor[7].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 7); 
		             	     }    	     		             	     		             	    	    
		             	  
		             	     else if (area_Education.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Education.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length+area_Other.length+area_Social.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Education Majors" + part3;
		             	  	    areaandmajor[8].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 8); 
		             	     }		             	     		             	        
		             	  
		             	     else if (area_Arts.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_Arts.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length+area_Other.length+area_Social.length+area_Education.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Arts Majors" + part3;
		             	  	    areaandmajor[9].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 9); 
		             	     }				             	      	                  	      	     
		             	  
		             	     else if (area_LAH.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_LAH.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length+area_Other.length+area_Social.length+area_Education.length+area_Arts.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Liberal Arts Majors" + part3;
		             	  	    areaandmajor[10].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 10); 
		             	     }	 	     		             	     	             	     
		             	  
		             	     else if (area_LL.indexOf(d.key) > -1)
		             	     {
		             	  	    d.x = jobarc_angle + othernodeangle*(area_LL.indexOf(d.key)+area_BAES.length+area_Physical.length+area_CMS.length+area_Engineering.length+area_Business.length+area_Communications.length+area_Other.length+area_Social.length+area_Education.length+area_Arts.length+area_LAH.length);
		             	  	    var part1 = d.id.substring(0, d.id.indexOf("@")+1);
		             	  	    var part3 = d.id.substring(d.id.indexOf("|"), d.id.length);
		             	  	    did = part1 + "Lit & Lang Majors" + part3;
		             	  	    areaandmajor[11].push(d);
		             	  	    majorgroupIDByIndex.set(d.name-5012, 11); 
		             	     }		             	  		             	    		             	  		            	    
		             }
		             		             		             	  
						     deep = d.y-150 + 10;
						     d.id = did;
						     		
		             return "rotate(" + (d.x - 90) + ")translate(" +(deep + 8)+ ",0)" + (d.x < 180 ? "" : "rotate(180)"); 
	            })
              .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
              .text(function(d) 
              {             	  
              	   majorIDByIndex.set(d.name, d.name-5012);  		
              	   	  
		               majornode.push(d);
		               majorarray.push(d.key);
		                  
		               return d.key; 	              	   
              })
              //.on("dblclick", refreshwindow)	
              .on("mouseover", function(d) {  
              	
              	   node.classed("node--faded", false);
              	   node.classed("node--disappeared", false);
              	                
                   mouseovermajornode(d);

              })	
              .on("mouseout", function(d) 
              {	
              	   if (connectiondirection == "Major->Job")
              	   {              	   	                	   	
              	   	  if (selectedmajor.length > 0)
              	   	  {
              	         node.filter( function(e) 
              	         { 
              	      	     var alreadyselected = 0;
              	      	     for (var i=0; i<selectedmajor.length; i++)
              	      	     {
              	      	  	     if (e.key == selectedmajor[i])
              	      	  	        alreadyselected = 1;
              	      	     }
              	      	  
              	      	     return alreadyselected == 0; 
              	         })
              	         .classed("node--faded", true)
              	         .style("fill", "black");
              	      }
              	      
              	      else if (selectedmajor.length == 0)   
              	      	 svg.selectAll(".node").style("fill", "black");

              	   }
              	   
              	   else
              	   {             	   	  
              	   	  if ( connectedmajornodes.length > 0 )
              	   	  {           	   	  
              	         node.filter( function(e) 
              	         { 
              	      	     var alreadyselected = 0;
              	      	     for (var i=0; i<connectedmajornodes.length; i++)
              	      	     {
              	      	  	     if (e.key == connectedmajornodes[i])
              	      	  	        alreadyselected = 1;
              	      	     }
              	      	     
              	      	     return alreadyselected == 0; 
              	         })
              	         .classed("node--disappeared", true);             	      
              	      }
              	   
              	   }
              	                   
                   mouseoutmajornode(d);
              })					   
						  .on("click", function (d) 
						  {							  	
						  	 if (connectiondirection == "Major->Job" && cloudmode == 0)
						  	 {              					          			          	          		          
					          var indexinarray = selectedmajor.indexOf(d.key);						          
					          cloudEl.selectAll("text").remove(); 
					          		             					          
					          if (indexinarray >= 0)
					          {
					             savedclick.splice(indexinarray, 1);
					             selectedmajor.splice(indexinarray, 1);
					             relatedjobnode = [];	
					             jobtext_pair = [];			
					             				             
					             currentNodeClickingMode = 0;					             
					             
					             svg.selectAll(".jobgroupnode").remove();	    
                       addCareerSectorLabel();				             
					             goback();          
					          } 
					             
					          
					          else if (indexinarray < 0)
					          { 					          						          				          					          					          
					             divTip.transition()
                       .duration(100)
                       .style("opacity", .9)
                       .style("font-size", "50px");		                                                                                               						   
				                                      
				               if (d.deep == 2590)	
                       {											              
                          selectedmajor.push(d.key);                    
                          $.post("insertmajornodetable.php", { majorname: d.key } );                                            
                          savedclick.push(d.key);
						           }
					        						        
						           mouseclk(d); 	
						        }						        
						      }								
              });
}









function drawmajorarc()
{
	   var matrix2 = [];
	
	   if (majorplotmode == 1) 
       {

          for (var i=0; i<schoolandmajor.length; i++)
          {
              matrix2[i] = [];
              for (var j=0; j<schoolandmajor.length; j++) 
              {
           	      if (i == j)
           	         matrix2[i][j] = schoolandmajor[i].length;
           	      else
                     matrix2[i][j] = 0;                                   
              } 
          }

       }
       
       else if (majorplotmode == 2)
       {	
          for (var i=0; i<areaandmajor.length; i++)
          {
              matrix2[i] = [];
              for (var j=0; j<areaandmajor.length; j++) 
              {
           	      if (i == j)
           	         matrix2[i][j] = areaandmajor[i].length;
           	      else
                     matrix2[i][j] = 0;                                   
              } 
          }
       }
	
	
	     chord2.matrix(matrix2);        
       
       arc2.innerRadius(function (d) { return (innerRadius-260); }) 
           .cornerRadius(50)
           .outerRadius(innerRadius-135); 

	
	     var chordgroups2 = chord2.groups();
      
       var anglespan2 = chordgroups2[0].endAngle - chordgroups2[0].startAngle;   
       chordgroups2[0].startAngle = 1.0*Math.PI;
       chordgroups2[0].endAngle = chordgroups2[0].startAngle + 0.5*anglespan2;
       
       for (var i = 1; i<chordgroups2.length; i++)
       {
       	   anglespan2 = chordgroups2[i].endAngle - chordgroups2[i].startAngle;
       	   chordgroups2[i].startAngle = chordgroups2[i-1].endAngle;
       	   chordgroups2[i].endAngle = chordgroups2[i].startAngle + 0.5*anglespan2;
       }
	
	
	
	
	     majorarc = svg.selectAll(".arc")
                  .data(chordgroups2)
                  .enter().append("g");  
                  
                       
                                    
      
       majorarc.append("path")  
       .attr("class", "majorgrouparc")      
       .attr("fill", function(d) {return majorarccolor(d.index);})
       .on("dblclick", function (d) 
		   {   	                
           if (connectiondirection == "Major->Job" && cloudmode == 0)
           {
           	  var indexinarray = selectedmajorarc.indexOf(d.index);						          
					    cloudEl.selectAll("text").remove(); 
					    
					     if (indexinarray >= 0)
					     {
					     	/*
					     	   for (var i1=0; i1<selectedmajor.length; i1++)
					     	   {
					     	   	   var thisMajorGroupID = majorgroupIDBymajor.get(selectedmajor[i1]);
					     	   	   if (thisMajorGroupID == d.index)
					     	   	       selectedmajor.splice(i1, 1);
					     	   }
					     	
					     	   relatedjobnode = [];	
					         jobtext_pair = [];								             				             
					             
					         currentNodeClickingMode = 0;					             
					             
					         svg.selectAll(".jobgroupnode").remove();	    
                   addCareerSectorLabel();	
                   */			             
					         goback2(); 
					     }
					    
					     else if (indexinarray < 0)
					     {
					     	   selectedmajorarc.push(d.index); 
                   dblclkMajorArc(d.index);  
               }
           }                  
		   })
       .on("mouseover", function(d) 
       {	
       	   d3.select(this)
      	   .transition()
      	   .duration(200)
      	   .style('opacity', 0.8);
       	         	  
       	   var displaytag;
       	            	
           if (majorplotmode == 1)
	            displaytag = schoolname[d.index];	
	                  
	         else if (majorplotmode == 2)   
	            displaytag = areaname[d.index];           
	                         	       		           				
			     div.transition()
				   .duration(100)	
				   .style("opacity", .9);	
				
			     div.html(displaytag)	 
				   .style("left", (d3.event.pageX - 240*currentScale) + "px")
           .style("top", (d3.event.pageY + 20*currentScale) + "px")
           .style("font-size", 24*currentScale+"px")
           //.style("color", majorarccolor(d.index))
           .style("color", "black")
           .style("height", "20px");         
			 }) 
			 .on("mouseout", function (d) 
			 {
			 	   d3.select(this)
           .transition()
           .duration(200)
           .style('opacity', 1.0);
			 				 	
           div.transition()
           .duration(100)
           .style("opacity", 0);
       }) 
       .on("contextmenu", function (d, i) {
            d3.event.preventDefault();				              
       })
       .attr("d", arc2);
       
       
   /*
       groupnode.data(chordgroups2)
       .enter().append("g")
       .attr("class", "majorgroupnode")
       .append("text")
       .each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
       .attr("dy", ".35em")
       .attr("transform", function (d) 
       {
       	    var keyword = nameByIndex.get(d.index+jobgroup_num+1);
       	    
       	    //console.log(keyword);
       	
       	    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                             + "translate(" + ((keyword.length == 1 ? (innerRadius-260) : keyword == "Type" ? (innerRadius-360) : keyword == "Class" ? (innerRadius-360) : (innerRadius-270)) - 10) + ")"
                             + (d.angle > Math.PI ? "rotate(180)" : ""); 
       })
       .style("text-anchor", function (d) { return d.angle > Math.PI ? null : "end"; })
       .text(function (d) 
       {        	     
       	     var returnkey
       	     
       	     if (majorplotmode == 1)
       	        returnkey = schoolname_short[d.index];
       	     
       	     else if (majorplotmode == 2)
       	        returnkey = areaname_short[d.index];
       	            	         	            	     	  
       	     return returnkey; 
       });
   */      
       
}     
  
 
  
function redrawmajorarc()
{
	  var currentmajorplotmode = checkmajorplotmode();	
    document.cookie ="majorplotmode=" + currentmajorplotmode;  
    
    refreshwindow();
}





$(document).ready(function()
{
        $('#majorform').change(function()
        {
            alert('Radio Box has been changed!');
        });
});




var xlabel1 = ["", "volunteer", "Internship", "Entry Level", "Experienced"];
var xlabel2 = ["", "Freshman", "Sophomore", "Junior", "Senior", "Graduate", "Alumni", "Unspecified"];

function drawSummaryWidget_Jobs()
{	 
    document.getElementById("majortab").checked = false;
  	document.getElementById("majortab").style.backgroundColor = "#C5C5C5";    	   	
    document.getElementById("jobtab").checked = true;    	 
    document.getElementById("jobtab").style.backgroundColor = "white";
		
	  document.getElementById('summaryview').innerHTML = "";
	 
    var checkboxContainer=  d3.select('#summaryview').append("svg").attr("id","checkBoxcontainer").attr("width", 235).attr("height", 40);
    var checkboxlabel= ["Position Type", "Class Level"];
    var connectiondirection = "Position Type";

    var checkboxGroups= checkboxContainer.selectAll("g.button")
                        .data(checkboxlabel)
                        .enter()
                        .append("g")
                        .attr("class","button")
                        .style("cursor","pointer");
                                                
    checkboxGroups.append("rect")
    .attr("class","buttonRect")
    .attr("width",14)
    .attr("height",14)
    .attr("x",function(d,i) {return 8+122*i;})
    .attr("y", 10)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width","2");
                        
    d3.selectAll("rect").filter(function(d) { return d == connectiondirection; }).attr("fill", pressedColor);
    
    
    
    var array1 = [], array2 = [];
    
    if (currentNodeClickingMode == 0)
    {
       array1 = [alljobnodes_volunteer.length, alljobnodes_internship.length, alljobnodes_ftentrylevel.length, alljobnodes_ftexperienced.length]; 
       array2 = [alljobnodes_freshman.length, alljobnodes_sophomore.length, alljobnodes_junior.length, alljobnodes_senior.length, alljobnodes_graduate.length, alljobnodes_alumni.length, alljobnodes_unspecified.length];
    }
    
    
    
    else if (currentNodeClickingMode == 1)
    {
	 		 	  var t1=0, t2=0, t3=0, t4=0, t5=0, t6=0, t7=0, t8=0, t9=0, t10=0, t11=0;
	 		 	  
	 		 	  alljobnodes_volunteer.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t1++;
		      });	
		      
		      alljobnodes_internship.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t2++;
		      }); 
		      
		      alljobnodes_ftentrylevel.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t3++;
		      });	
		      
		      alljobnodes_ftexperienced.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t4++;
		      });	 	
		      
		      alljobnodes_freshman.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t5++;
		      }); 		      
		      
		      alljobnodes_sophomore.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t6++;
		      });
	 	
    	    alljobnodes_junior.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t7++;
		      }); 
		      
		      alljobnodes_senior.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t8++;
		      });
		      
		      alljobnodes_graduate.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t9++;
		      });
		      
		      alljobnodes_alumni.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t10++;
		      });
		      
		      alljobnodes_unspecified.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     t11++;
		      });
		      
		      array1 = [t1, t2, t3, t4];
		      array2 = [t5, t6, t7, t8, t9, t10, t11];
    }
    
    
       
    else if (currentNodeClickingMode == 2)
    {
    	 var gID = indexByName.get(selectedjobgroup);
    	 array1 = [ careerfieldObject[gID].positiontype_volunteer.length, careerfieldObject[gID].positiontype_internship.length, careerfieldObject[gID].positiontype_ftentrylevel.length, careerfieldObject[gID].positiontype_ftexperienced.length ];
    	 array2 = [ careerfieldObject[gID].classlevel_freshman.length, careerfieldObject[gID].classlevel_sophomore.length, careerfieldObject[gID].classlevel_junior.length, careerfieldObject[gID].classlevel_senior.length, careerfieldObject[gID].classlevel_graduate.length, careerfieldObject[gID].classlevel_alumni.length, careerfieldObject[gID].classlevel_unspecified.length];
    }
    
    
    else if (currentNodeClickingMode == 3)
    {
    	 array1 = [ objectarray[selectedsubgroupID].positiontype_volunteer.length, objectarray[selectedsubgroupID].positiontype_internship.length, objectarray[selectedsubgroupID].positiontype_ftentrylevel.length, objectarray[selectedsubgroupID].positiontype_ftexperienced.length ];
    	 array2 = [ objectarray[selectedsubgroupID].classlevel_freshman.length, objectarray[selectedsubgroupID].classlevel_sophomore.length, objectarray[selectedsubgroupID].classlevel_junior.length, objectarray[selectedsubgroupID].classlevel_senior.length, objectarray[selectedsubgroupID].classlevel_graduate.length, objectarray[selectedsubgroupID].classlevel_alumni.length, objectarray[selectedsubgroupID].classlevel_unspecified.length];
    }
    
    
 
    checkboxGroups.on("click",function(d) 
    {      	      	  
    	  if (d == "Position Type")
    	     drawBarchart(array1, xlabel1, positioncolor); 
    	  
    	  else if (d == "Class Level")
    	  	 drawBarchart(array2, xlabel2, classcolor); 
    	     
	      connectiondirection = d;       
        updateCheckboxColors(d3.select(this), d3.select(this.parentNode)) 
    })
    .on ("mouseover", function() 
    {
        if (d3.select(this).select("rect").attr("fill") != pressedColor) 
        {
           d3.select(this)
           .select("rect")
           .attr("fill",hoverColor);
        }
    })
    .on ("mouseout", function() 
    {
        if (d3.select(this).select("rect").attr("fill") != pressedColor) 
        {
           d3.select(this)
           .select("rect")
           .attr("fill","white");
        }
    })
 
 
    checkboxContainer.append("text")    
    .attr("x", 28)
    .attr("y", 22)
    .text(checkboxlabel[0])
    .style("font-weight", "bold")
    .style("font-size", "12px");


    checkboxContainer.append("text")     
    .attr("x", 150)
    .attr("y", 22)
    .text(checkboxlabel[1])
    .style("font-weight", "bold")
    .style("font-size", "12px");
  
  
    drawBarchart(array1, xlabel1, positioncolor);  	 
}




function updateCheckboxColors(button, parent) 
{
    parent.selectAll("rect").attr("fill", "white");
    button.select("rect").attr("fill", pressedColor);
}



//console.log(d3.select('.smallwidget').style('width'));
//console.log(d3.select('.smallwidget').style('height'));



var inset_w = 235;
var inset_h = parseInt( d3.select('.smallwidget').style('height') );



var chartcontainer = d3.select("#summaryview").append("svg").attr("width", inset_w).attr("height", inset_h);  

function drawBarchart(displayarray, displaylabel, displaycolor)
{
	  var scale = {y: d3.scale.linear()};
    var totalWidth = inset_w;
    var totalHeight = 0.98*inset_h;
    var horizontal_shift = inset_w - 200;
    var vertical_shift = inset_h*2/9;
    var maxValue = Math.max.apply(null, displayarray);
    var yUnit = (totalHeight-vertical_shift-5)/maxValue;    
    var barWidth = (totalWidth-1.4*horizontal_shift)/(displayarray.length);  
    
    chartcontainer.remove();        
    chartcontainer = d3.select("#summaryview").append("svg").attr("width", totalWidth).attr("height", totalHeight);   
    var bars = chartcontainer.selectAll('g').data(displayarray).enter().append('g');
    

    bars.append('rect')
    .attr
    ({
    	  'x': function (d, i) {return  horizontal_shift + 0.725*barWidth + 1*i*barWidth;},
        'y': function (d, i) {return  totalHeight - vertical_shift - (1/1.05)*yUnit*displayarray[i];},
        'height': function (d, i) {return (1/1.05)*yUnit*displayarray[i];},
        'width': 0.5*barWidth
    })
    .attr('fill', function (d, i) {return displaycolor(i);}); 
 
  
    var yScale = d3.scale.linear()
	               .domain([0, 1.05*maxValue])    
		             .range([totalHeight-vertical_shift, 5]);   
                
   		
		var xScale = d3.scale.ordinal()
                 .domain(displaylabel)
                 .rangePoints([horizontal_shift, totalWidth-0.4*horizontal_shift]);
		    		    
    var yAxis = d3.svg.axis()
                .orient("left")
                .scale(yScale);
        
    var xAxis = d3.svg.axis()
                .orient("bottom")
                .scale(xScale);
            
    chartcontainer.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+horizontal_shift+", 0)")
    .call(yAxis);

  
    chartcontainer.append("g")
    .attr("class", "x axis")   
    .attr("transform", "translate(0, " + (totalHeight - vertical_shift) + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "translate(" + 8 + ", " + 1 + ")" + "rotate(-22)" );               
}








function drawSummaryWidget_Majors()
{ 
    document.getElementById("jobtab").checked = false;
    document.getElementById("jobtab").style.backgroundColor = "#C5C5C5";    	   	
    document.getElementById("majortab").checked = true;    	 
    document.getElementById("majortab").style.backgroundColor = "white";    	 	
	  document.getElementById('summaryview').innerHTML = "";
	  
	  chartcontainer = d3.select("#summaryview").append("svg").attr("width", inset_w).attr("height", inset_h); 	  	  
	  
    var w = 0.9*inset_w, h = 0.8*inset_h, r = Math.min(w, h) / 2,
    labelr = r + 12, // radius for label anchor
    color = d3.scale.category20(),
    donut = d3.layout.pie(),
    arc4 = d3.svg.arc().innerRadius(0).outerRadius(r);
    
    var pie2 = d3.layout.pie().sort(null).value(function(d) { return d.data; });
        
    
    var displayarray = [];
    
    if (currentNodeClickingMode == 0 || currentNodeClickingMode == 1)
       displayarray = majorgrouparray;
       
    else if (currentNodeClickingMode == 2 || currentNodeClickingMode == 3)
    {
    	 //displayarray = majorgrouparray;
    	 
    	 
    	 var g1=0, g2=0, g3=0, g4=0, g5=0, g6=0, g7=0, g8=0, g9=0, g10=0, g11=0, g12=0; 
    	 
    	 connectedmajornodes.forEach(function(e) 
		   {
		   	  if ( majorgroupIDBymajor.get(e) == 0 )
		   	     g1++;
		   	     
		   	  else if (majorgroupIDBymajor.get(e) == 1)
		   	  	 g2++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 2)
		   	  	 g3++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 3)
		   	  	 g4++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 4)
		   	  	 g5++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 5)
		   	  	 g6++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 6)
		   	  	 g7++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 7)
		   	  	 g8++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 8)
		   	  	 g9++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 9)
		   	  	 g10++;
		   	  	 
		   	  else if (majorgroupIDBymajor.get(e) == 10)
		   	  	 g11++;
		   	  
		   	  else if (majorgroupIDBymajor.get(e) == 11)
		   	  	 g12++;
		   });
		   
		   
		   displayarray.push({index: 0, data: g1}); 
		   displayarray.push({index: 1, data: g2});
		   displayarray.push({index: 2, data: g3});
		   displayarray.push({index: 3, data: g4});
		   displayarray.push({index: 4, data: g5});
		   displayarray.push({index: 5, data: g6});
		   displayarray.push({index: 6, data: g7});
		   displayarray.push({index: 7, data: g8});
		   displayarray.push({index: 8, data: g9});
		   displayarray.push({index: 9, data: g10});
		   displayarray.push({index: 10, data: g11});
		   
		   if (majorplotmode == 2)
		      displayarray.push({index: 11, data: g12});
    }
    
    
    
    var donutarcs = chartcontainer.selectAll("g.arc")
                    .data(pie2(displayarray))
                    .enter().append("svg:g")
                    .attr("class", "arc")
                    .attr("transform", "translate(" + (r + 26) + "," + inset_h/2 + ")");

    donutarcs.append("svg:path")
    .attr("fill", function(d, i) { return majorarccolor(i); })
    .attr("d", arc4)
    .on("mouseover", function (d, i)       
    {
    	  //console.log(i);
    	  
    	  var displaytag = "";
    	  
    	  if (majorplotmode == 1)
    	     displaytag = schoolname_short[i];
    	     
    	  else if (majorplotmode == 2)
    	     displaytag = areaname_short[i];
    	  
    	  
    	  div2.transition()
				.duration(100)	
			  .style("opacity", .9);	
				
			  div2.html(displaytag)	 
				.style("left", (d3.event.pageX + 50) + "px")
        .style("top", (d3.event.pageY - 50) + "px")
        .style("font-size", 20 + "px")
        .style("color", "black")
        .style("height", "20px");
    	  
    })
    .on("mouseout", function (d) 
    {
        div2.transition()
        .duration(100)
        .style("opacity", 0);
    });
    
    
    donutarcs.append("svg:text")
    .attr("transform", function(d) 
    {
        var c = arc4.centroid(d),
            x = c[0],
            y = c[1],
            h = Math.sqrt(x*x + y*y);
        return "translate(" + (x/h * labelr) +  ',' +
           (y/h * labelr) +  ")"; 
    })
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")   
    .filter(function(d) { return d.value>0; })
    .text(function(d, i) { return d.value; });       
}









function changeJobTable(selectedOption)
{
	  //console.log(selectedOption);	  
	  //console.log(jobgroup_num); 	  
	  
	  if (selectedOption == "all")
	  {
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	  	 	  addTable( relatedjobnode );
	  	 	  	 
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( groupanditem[thisgroupID] );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject2[thisgroupID].subgroup[selectedsubgroupID] );
	  	 }
	  }
	  
	  else if (selectedOption == "none")
	  {	  
	     var currentDBLDiv = document.getElementById("currentdblclick");  
	     currentDBLDiv.innerHTML = "";
	  
       var myTableDiv = document.getElementById("myDynamicTable");    
       myTableDiv.innerHTML = "";
	  }
	  
	  
	  else if (selectedOption == "volunteer")
	 	{	 		
	 		 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		     
	 		 currentDbcText = currentDbcText + " --- Volunteer/Co-op";
	 		
	 		 if (currentNodeClickingMode == 0)
	 		    addTable( alljobnodes_volunteer );
	 		    
	 		 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_volunteer.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	 		     		 
	 		 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].positiontype_volunteer );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].positiontype_volunteer );
	  }
	  
	  	
	  else if (selectedOption == "internship")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		     
	  	 currentDbcText = currentDbcText + " --- Internship";
	  	
	  	 if (currentNodeClickingMode == 0) 
	  	    addTable( alljobnodes_internship );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_internship.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }   
	  	    	  	 
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].positiontype_internship );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].positiontype_internship );	  	
	  }
	  
	  	
	  else if (selectedOption == "ftentrylevel")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		     
	  	 currentDbcText = currentDbcText + " --- Entry Level";
	  	
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes_ftentrylevel );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_ftentrylevel.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }  
	  	 
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].positiontype_ftentrylevel );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].positiontype_ftentrylevel );
	  }
	  
	  	
	  else if (selectedOption == "ftexperienced")
	 	{
	 		 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		     
	 		 currentDbcText = currentDbcText + " --- Experienced";
	 		 
	 		 if (currentNodeClickingMode == 0)
	 		    addTable( alljobnodes_ftexperienced );
	 		    
	 		 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_ftexperienced.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	 		 
	 		 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].positiontype_ftexperienced );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].positiontype_ftexperienced );
	  }	  
	  
	  	
	  else if (selectedOption == "freshman")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	  	
	  	 currentDbcText = currentDbcText + " --- Freshman";
	  	
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes_freshman );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_freshman.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	  	    
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_freshman );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_freshman );
	  }
	  	
	  else if (selectedOption == "sophomore")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	  	
	  	 currentDbcText = currentDbcText + " --- Sophomore";
	  	
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes_sophomore );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_sophomore.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	  	 
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_sophomore );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_sophomore );
	  }
	  	
	  	
	  else if (selectedOption == "junior")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	  	
	  	 currentDbcText = currentDbcText + " --- Junior";
	  	
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes_junior );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_junior.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	  	 
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_junior );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_junior );
	  }
	  
	  	
	  else if (selectedOption == "senior")
	 	{
	 		 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		
	 		 currentDbcText = currentDbcText + " --- Senior";
	 		
	 		 if (currentNodeClickingMode == 0)
	 		    addTable( alljobnodes_senior );
	 		    
	 		 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_senior.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	 		    
	 		 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_senior );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_senior );
	  }
	  
	  	
	  else if (selectedOption == "graduate")	
	 	{
	 		 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		
	 		 currentDbcText = currentDbcText + " --- Graduate Student";
	 		
	 		 if (currentNodeClickingMode == 0)
	 		    addTable( alljobnodes_graduate );
	 		    
	 		 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_graduate.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	 		    
	 		 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_graduate );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_graduate );
	  }
	  
	  	
	  else if (selectedOption == "alumini")
	  {
	  	 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		     
	  	 currentDbcText = currentDbcText + " --- Alumini";
	  	
	  	 if (currentNodeClickingMode == 0)
	  	    addTable( alljobnodes_alumni );
	  	    
	  	 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_alumini.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	  	    
	  	 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_alumini );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_alumini );
	  }
	  	
	  	
	  else if (selectedOption == "unspecified")
	 	{
	 		 if (currentDbcText.indexOf("---") > 0)
	 		     currentDbcText = currentDbcText.substring(0, currentDbcText.indexOf("---")-1);
	 		 
	 		 currentDbcText = currentDbcText + " --- Unspecified";
	 		
	 		 if (currentNodeClickingMode == 0)
	 		    addTable( alljobnodes_unspecified );
	 		    
	 		 else if (currentNodeClickingMode == 1)
	 		 {
	 		 	  var temp_array = [];
	 		 	  alljobnodes_unspecified.forEach(function(e) 
		   	  {		   	  	  
		   	  	  if (relatedjobnode.indexOf(e)>=0)
		   	  	     temp_array.push(e);
		      });	
		      
		      addTable( temp_array ); 		 	  
	 		 }
	 		    
	 		 else if (currentNodeClickingMode == 2)
	  	 {
	  	 	  var thisgroupID = indexByName.get(selectedjobgroup);
	  	    addTable( careerfieldObject[thisgroupID].classlevel_unspecified );
	  	 }
	  	 
	  	 else if (currentNodeClickingMode == 3)
	  	    addTable( objectarray[selectedsubgroupID].classlevel_unspecified );
	  }
	  
}



function loadData(year)
{
	  alert(year);
}
