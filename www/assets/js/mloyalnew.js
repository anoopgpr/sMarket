var strforpopup='';
var gobackappovar = '';
var globalcid = '';
var globalcname = '';
var globalgst = '';
var globalcattype = '';
var pstr1='';

var msgotp='';

var prid =[];
var prqty =[];
var prtamount =[];

var cityarr=new Array();
var cityidarr=new Array();
var backstore ="";
var reg_id="";

var order_itemname='';
var order_itemcode='';
var order_orderid='';
var order_mobileno='';
var deviceType='';
var foodtype='';

var json_fb='https://taghash.co/mloyalApps/facebooksmarket.php';
var RSS_twitter='http://103.25.128.61/luluhmart/twitter.php?uname=smarket';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinterestrgill.php?brand=smarket';
var RSS_instagram='https://www.instagram.com/smarket/?__a=1';
var RSS_youtube='https://taghash.co/mloyalApps/you.php?vid=smarket';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://smarket.tumblr.com';

var brandname = 'smarket';
var aboutus_det = 'smarket';
var brand_url = 'http://www.smarket.com/';
//var brand_id = '45212E24-42F9-4940-A58C-43F6BE16E74F';


var SERVER = "https://smarket.mloyalretail.com/m/";
var SERVER1 = "https://smarket.mloyalretail.com/";
var SERVER2 = "https://smarket.mloyalretail.com/apis/";
//var shopcms = 'http://13.71.80.78/projects/mloyalshops/generic/';
var shopcmsurl = 'https://taghash.co/mloyalshops/smarket/';





user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":""
};

$(function () {
	'use strict';
    $(document).on("mobileinit",function() {
    	//$.mobile.autoInitializePage = false;
});


$(document).ready(function(event) {            
  
				$( function() {
					 $( "#popupNested1" ).enhanceWithin().popup();
                     $( "#popupNested2" ).enhanceWithin().popup();
                     $( "#popupNestedSettings" ).enhanceWithin().popup();
					 $( "#add_address_pop" ).enhanceWithin().popup();
					 $( "#edit_address_pop" ).enhanceWithin().popup();
				});
                //loadCity();
                //loadpetpoojaCity();
                $("#wait").css("display","none"); // hide it initially
				
                 $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });
				  
                 $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });
				
				loadStates();

				document.getElementById('home_search1').addEventListener('submit', function(e) {
				    searchprodnamebyname($('#home_searchbtn1').val());
				    e.preventDefault();
				}, false);

				 document.addEventListener("backbutton", function(e){
						if($.mobile.activePage.is('#myaccount')){
							navigator.app.exitApp();
						}
			   if($.mobile.activePage.is('#dashboard')){
				   e.preventDefault();
				   var x;
					if (confirm("Are you sure you want to exit?") == true) {
						x = "Yes";
						navigator.app.exitApp();
					} else {
						x = "No";
					}
				   
			   }
			   if($.mobile.activePage.is('#categoriesPage')){
				   e.preventDefault();
				   var x;
					if (confirm("Are you sure you want to exit?") == true) {
						x = "Yes";
						navigator.app.exitApp();
					} else {
						x = "No";
					}
				   
			   }
			   else {

				   navigator.app.backHistory();
			   }
			}, false);

            foodtype='';

			deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
       			      if(deviceType=='null' || deviceType=='')
                        deviceType='Android';
			
			
                
                  if(localStorage.getItem("usernamesmarket")!=null && localStorage.getItem("usernamesmarket")!='' && localStorage.getItem("passwordsmarket")!=null && localStorage.getItem("passwordsmarket")!='')
                    {


							$('#username').val(localStorage.getItem("usernamesmarket"));
							var pass = localStorage.getItem("passwordsmarket");

							if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
							user.mobile = localStorage.getItem('usernamesmarket');
							var pwd = localStorage.getItem('passwordsmarket');
							var uname = user.mobile;
							user.balance = localStorage.getItem('balance');
							user.firstname = localStorage.getItem('firstname');
							user.lastname = localStorage.getItem('lastname');
							user.id = localStorage.getItem('id');
							user.total = localStorage.getItem('total');
							user.validity = localStorage.getItem('validity');
							user.trans_sms = localStorage.getItem('trans_sms');
							user.mktgsms = localStorage.getItem('mktgsms');
							user.cpns = localStorage.getItem('cpns');
							user.ads = localStorage.getItem('ads');
							user.dob = localStorage.getItem('dob');
							user.emailid = localStorage.getItem('emailid');
							user.def_store = localStorage.getItem('def_store');
							user.def_city = localStorage.getItem('def_city');
							user.visit_frequency = localStorage.getItem('visit_frequency');
							  // console.log(" in ready");
                              // alert(user.firstname);
                            if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
                            {
                                user.firstname = '';
                            }
                        if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
                                user.lastname = '';
                        if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
                                user.emailid = '';
                        if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
                                user.dob = '';
                        if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
                                user.mobile = '';
                           // alert(user.firstname);
                            $('#update_firstname').val(user.firstname);
                            $('#update_lastname').val(user.lastname);
                                var dob = user.dob.split('-');
                                var mm = dob.length == 3 ? dob[1] : '';
                                var dd = dob.length == 3 ? dob[0] : '';
                                var yyyy = dob.length == 3 ? dob[2] : '';
                                
                                $('#update_dd').val(dd);
                                $('#update_mm').val(mm);
                                $('#update_yyyy').val(yyyy);

                            $('#update_email').val(user.emailid);
                            $('#update_dob').val(user.dob);
                            //$('#update_firstname1').val(user.firstname);
                            //$('#update_lastname1').val(user.lastname);
                            //$('#update_email1').val(user.emailid);
                            //$('#update_dob1').val(user.dob);

    
                            //document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
                            //document.getElementById("profilepts").innerHTML=user.total+' Points';
                            //document.getElementById("profilenm1").innerHTML=user.firstname;
                            //document.getElementById("profilepts1").innerHTML=user.total+' points';
                            
                             $("#wait").css("display","none");
                            authenticate();
                          //if(imageExists('https://taghash.co/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg'))
                          //{
                              //document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg';
                         // }                     
                     }
				   else if(localStorage.getItem("usernamesmarket")!=null && localStorage.getItem("usernamesmarket")!='' && (localStorage.getItem("passwordsmarket")==null || localStorage.getItem("passwordsmarket")=='')) 
	                 {
					   $('#username').val(localStorage.getItem("usernamesmarket"));
					   $.mobile.changePage( "#submit_OTP", { transition: "none"} );
	                 }
				   else
					  {
								
						    $.mobile.changePage( "#login", { transition: "none"} );
					  }

})
});

function getotp()
{
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.startsWith("0")== true)
	 {
		toast('Please remove initial 0 from mobile number');
	 }
	 else
	 {
		 
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 //console.log(data);
			 //console.log(textStatus);
			 if(data.toLowerCase()=='success')
			 {
				  //startWatch();
				  //console.log("In forgot_pswd.asp");
				  toast('The verification code has been sent to your Mobile. Please enter the same here.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      $('#username').val(mob);
				  localStorage.setItem('usernamesmarket',mob);
				  document.getElementById('username').readOnly = true;
				 
				  $.mobile.changePage("#submit_OTP");
             }
			 else
			 {
				  toast(mob+' is not valid/registered, please try again.');
				  $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  
	 }
}


$(document).on('pageinit', '#submit_OTP', function (event, ui) {

		//receivedEvent('deviceready');

        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});

$(document).on('pageinit', '#slidepage', function (event, ui) {
         document.getElementById("slide1img").src=SERVER+'images/apps/splash1.jpg';
		 document.getElementById("slide2img").src=SERVER+'images/apps/splash2.jpg';
		 document.getElementById("slide3img").src=SERVER+'images/apps/splash3.jpg';
		
});
function hideloader()
{
	try{
	var pop = document.getElementById('wait');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    }catch(err){}
}

$(document).on('pageshow', '#home', function (event, ui) {
    hideloader();
    
});
// Function called when page has loaded
/*function init() {
  document.addEventListener("deviceready",onDeviceReady,false);
}

// Function called when phonegap is ready
function onDeviceReady() {
    //All pages at least 100% of viewport height
    var viewPortHeight = $(window).height();
    var headerHeight = $('div[data-role="header"]').height();
    var footerHeight = $('div[data-role="footer"]').height();
	console.log(headerHeight);
    var contentHeight = viewPortHeight - headerHeight;

    // Set all pages with class="page-content" to be at least contentHeight
    $('div[class="page-content"]').css({'min-height': contentHeight + 'px'});
 }*/
 
function showCategory()
{

	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '0';

	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getloccats/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
					 
				
			  var str1 = '';
			  var str2 = '<ul>';

			  for (var i = 0; i < data.length; i++)
			  {

				var cat_img = '';
				if(typeof data[i].image == undefined ||typeof data[i].image == 'undefined' || data[i].image == null || data[i].image == 'null' || data[i].image == '' )
                {
                    cat_img = 'assets/images/no-img.png';    
                }
			    else
				{
					cat_img = data[i].image;
				}


				if(typeof data[i].subcat==undefined || typeof data[i].subcat=="undefined" || data[i].subcat==undefined || data[i].subcat=='null')
                {
					str1 +='<h2 class="menu_heading_cat" id="menuh'+data[i].id+'">'+toTitleCase(data[i].name)+'</h2>';
					str1 +='<div class="menu_thread" id="sub'+data[i].id+'"></div>';
                }
                else
                {
					str1 +='<h2 class="menu_heading_cat" id="menuh'+data[i].id+'">'+toTitleCase(data[i].name)+'</h2>';
					str1 +='<div class="menu_thread" id="sub'+data[i].id+'"></div>';

					addSubcategory(data[i].id,data[i].gst);
				}


				str2+='<li><a href=javascript:showdiv(\'menuh'+data[i].id+'\'); style="font-weight: 700 !important;">'+checkforundefined(data[i].name)+'</a></li>';
				str2+= '<span id="menuh_side'+data[i].id+'"></span>';
				

              } 

			  str2+= '</ul>';


			  setTimeout(function(){
			$('.recommened_carousel').owlCarousel({
				items:2,
				loop:true,
				margin:10,
				dots:false,
				merge:true,
				autoplayTimeout:5000,
				autoplaySpeed:700,
				autoplay:true
			});
		},100)

			     //document.getElementById("categ_list").innerHTML=str;
				 document.getElementById("menu_items").innerHTML=str2;
				 document.getElementById("menusection").innerHTML=str1;

				/*for(var i=0;i<data.length;i++)
				{
					addProducts(data[i].id,data[i].name,data[i].gst);
				}*/
                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

                
      var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_prod2').text(items);
				$('#noofitems_main').text(items);
				$('#noofitems_cart').text(items);
				$('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
}

function showMainCategory()
{

	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '0';

	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getloccats/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			   //console.log(data);
			   //var str1 = '<h3>Categories</h3>';

			  var str1 = '<div class="row">';
			  //var str2 ='';
			  
			  for (var i = 0; i < data.length; i++)
			  {

				var cat_img = '';
				if(typeof data[i].image == undefined ||typeof data[i].image == 'undefined' || data[i].image == null || data[i].image == 'null' || data[i].image == '' )
                {
                    cat_img = 'assets/images/no_img.png';
                }
			    else
				{
					cat_img = data[i].image;
				}

                /*str2 += '<a href="javascript:showHomepage(\'menuh'+data[i].id+'\',\''+data[i].name+'\');" class="cate_block">';
                str2 += '<img src="'+cat_img+'">';
				str2 +='<h3 class="main_cat_heading" id="menuh'+data[i].id+'">'+toTitleCase(data[i].name)+'</h3>';
				str2 += '</a>';*/

				str1 += '<div class="col-sm-4">';
                
				if(typeof data[i].subcat==undefined || typeof data[i].subcat=="undefined" || data[i].subcat==undefined)
                {
					str1 += '<a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');" class="category_block">';
				}
				else
				{
					str1 += '<a href="javascript:showSubcat(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');" class="category_block">';
				}

				str1 += '<h3>'+toTitleCase(data[i].name)+'</h3>';
				str1 += '<div class="cat_icon">';
				str1 += '<img src="'+cat_img+'" class="img-fluid" alt="" onerror=\'javascript:onImgError2(this);\'>';
				str1 += '</div>';
				str1 += '</a>';
				str1 += '</div>';
              } 

			  str1+= '</div>';


			 document.getElementById("menusection_cat").innerHTML=str1;
			 //document.getElementById("menu_items").innerHTML=str2;

                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

                
      var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


           
}

function showdiv (id) {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: ($('#'+id).offset().top- 100)
    }, 'slow');

    $(".menu_items").height(0);


    $(".overlay").fadeOut(300)
    $(".overlay1").fadeOut(300)


	try{
	$( "#sidemenu" ).panel( "close" );
	}catch(err) 
	{	}
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function showCategory_old()
{

	var loc= localStorage.getItem('selectedstoresmarket');
	//console.log('Menu Location: '+loc);

	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getloccats/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
                var str1 = '';

				for(var i=0;i<data.length;i++)
				{
                    //console.log('data[i].subcat....'+data[i].subcat);
                    if(typeof data[i].subcat==undefined || typeof data[i].subcat=="undefined" || data[i].subcat==undefined)
                    {
					str+='<div id="catdiv'+data[i].id+'" class="catheader" onclick="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');">'+data[i].name+'</div>';
                    }
                    else
                    {
                    
                    str+='<div id="catdiv'+data[i].id+'" class="catheader" onclick="javascript:toggleDiv(\'catinnerdiv'+data[i].id+'\', \'catdiv'+data[i].id+'\');">'+data[i].name+'<span class="plus minus"></span></div>';
					
                    str+='<div id="catinnerdiv'+data[i].id+'" class="catinnerhdr">';
					str+='</div>';
                    
					str+='</div>';

					addSubcategory(data[i].id,data[i].gst);
                    }
				}

				document.getElementById("main_slider").innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

                
      var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
}

function showSubcat(catid,catname,gst)
{
	'use strict';	
	   $.ajax({
		 url: shopcmsurl+'getcat/getcategory/'+catid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				var str1 = '<div class="cate_section">';
				
				for(var i=0;i<data.length;i++)
				{

					var cat_img = '';
					if(typeof data[i].image == undefined ||typeof data[i].image == 'undefined' || data[i].image == null || data[i].image == 'null' || data[i].image == '' )
					{
						cat_img = 'assets/images/no_img.png';
					}
					else
					{
						cat_img = data[i].image;
						
					}

				    str1 += '<a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');" class="cate_block">';
					//str1 += '<a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+gst+'\');" class="cate_block">';
					str1 += '<img src="'+cat_img+'" onerror=\'javascript:onImgError2(this);\'>';
					str1 +='<h2 class="main_cat_heading" id="menuh'+data[i].id+'">'+toTitleCase(data[i].name)+'</h2>';
					str1 += '</a>';
				}

				str1+= '</div>';


				document.getElementById("header_title_subcat").innerHTML='';
			    document.getElementById("header_title_subcat").innerHTML= catname;

				document.getElementById("subcat_main").innerHTML=str1;

				$.mobile.changePage( "#subcatpg");

        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function checkExistpic(image_url)
{

	var image = new Image();
    image.src = image_url;

    image.onload = function()
    {
        return image_url;
		
    }
    image.onerror = function()
    {
        return 'assets/images/No_Image_Available.png';
    }

}

function addSubcategory(catid,gst)
{
	'use strict';	
	   $.ajax({
		 url: shopcmsurl+'getcat/getcategory/'+catid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				var str='';
				var str2='<ul>';
				
				for(var i=0;i<data.length;i++)
				{
				   str +='<h2 class="menu_heading_cat_sub" id="menuh_sub'+data[i].id+'">'+toTitleCase(data[i].name)+'</h2>';
				   str +='<div class="menu_thread" id="menu'+data[i].id+'"></div>';

				   str2 +='<li><a href=javascript:showdiv(\'menuh_sub'+data[i].id+'\');>'+checkforundefined(data[i].name)+'</a></li>';
					
				}

				str2 +='</ul>';

				//console.log('str2:'+str2);
				
				document.getElementById("sub"+catid).innerHTML=str;
				document.getElementById("menuh_side"+catid).innerHTML=str2;


				for(var i=0;i<data.length;i++)
				{
					addProducts(data[i].id,data[i].name,data[i].gst);
				}
        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showCategory55()
{

	var loc= localStorage.getItem('selectedstoresmarket');
	//console.log('Menu Location: '+loc);

	'use strict';	
	   $.ajax({
		 url: shopcmsurl+'getcat/getcategory/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
                var str1 = '';

				for(var i=0;i<data.length;i++)
				{
					 
					str +='<div class="cat-thumb">';
                    str +='<a href="#" onclick="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');">';					
       	    		//str +='<figure><img src='+data[i].image+' alt="" data-plugin-slide-caption="'+data[i].name+'" /></figure>';
					str +='<h4>'+data[i].name+'</h4>';
                    str +='</a>';
					str +='</div>';
					
					str1 +='<li><a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');">'+data[i].name+'</a></li>';
					
				}

				document.getElementById("main_slider").innerHTML=str;
                document.getElementById("categorypanel").innerHTML=str1;
				document.getElementById("InnerCategorypanel").innerHTML=str1;
                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}


function showsubCategory(catid,cname)
{
    globalcid=catid;
    document.getElementById("subcat_header").innerHTML='<span>'+cname+'</span> ';
	'use strict';	
	   $.ajax({
		 url: shopcms+'getcat/getcategory/'+catid+'/'+brand_id,
		 type: 'GET',
		 timeout: 50000,
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				document.getElementById("sub_slider").innerHTML=data;
                //showsubMenu();
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  $.mobile.changePage( "#subcategorypage");
	  

}
function showMenu()
{
	'use strict';	
	   $.ajax({
		 url: shopcms+'getcat/getmenu/0/'+brand_id,
		 type: 'GET',
		 timeout: 50000,
         dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//alert('JSONDATA:'+JSON.stringify(data));
				
                var str1 = '';
				for(var i=0;i<data.length;i++)
				{
				 str1 +='<li><a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\');">'+data[i].name+'</a></li>';
				}

                document.getElementById("categorypanel").innerHTML=str1;
				document.getElementById("InnerCategorypanel").innerHTML=str1;
                
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}
function showsubMenu()
{
	'use strict';	
	   $.ajax({
		 url: shopcms+'getcat/getmenu/'+globalcid+'/'+brand_id,
		 type: 'GET',
		 timeout: 50000,
         dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//alert('JSONDATA:'+JSON.stringify(data));
				
                var str1 = '';
				for(var i=0;i<data.length;i++)
				{
				 str1 +='<li><a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\');">'+data[i].name+'</a></li>';
				}

                //document.getElementById("categorypanel").innerHTML=str1;
				document.getElementById("InnerCategorypanel").innerHTML=str1;
                
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  
	  

}
var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.92,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#4c2355",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(3000)
            .fadeOut(400, function () {
                $(this).remove();
            });
};

var toast1 = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.9,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#4c2355",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2000)
            .fadeOut(400, function () {
                $(this).remove();
            });
};

var toast_loc = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.92,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#4c2355",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(4500)
            .fadeOut(400, function () {
                $(this).remove();
            });
};

function showMore(desc){
	//console.log(desc);
	$(desc).next(".more_description").slideToggle("fast");
	}
	
	function viewDetails(btn){
	//console.log(btn);
	//console.log($(btn).parents(".allOrders"));
	$(btn).parents(".allOrders").find(".order_details").slideToggle();
	}

function addProducts(cid,cname,gst)
{  
    
	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '0';

	'use strict';	
     //$('body').addClass('ui-loading');
	//document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	//$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';
	globalcid = cid;
	globalcname = cname;
	   $.ajax({
		 url: shopcmsurl+'getcat/getitems/'+loc+'/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {

			//console.log('ProductsData:'+JSON.stringify(data));
				
			var str = '<div class="menu_content"><ul>';

			var totlength = data.length;
            //console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("menu"+cid).innerHTML=str;
			}
			else
			{
                //console.log('foodtype in products'+foodtype);
				for(var i=0;i<totlength;i++)
				{
					if(data[i].catid==cid)
					{


					var imgurl= data[i].images;
					var imgurlnew = data[i].images;
                    var img_str_json=data[i].images;

					if(imgurlnew=='null' || imgurlnew==null || imgurlnew=='' || imgurlnew=='undefined')
					{
						imgurlnew = 'assets/images/No_Image_Available.png';
					}
					else
					{
					    imgurlnew= data[i].images[0];
					}

                    if(data[i].colum9 == null)
                    	data[i].colum9='';
                    if(foodtype=='VEG')
                    {
                    	
                   if(data[i].colum9=='green_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{

								
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else if(foodtype=='NON-VEG')
                    {

                    	
                    if(data[i].colum9=='red_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else
					{
						//console.log("333");
						str +='<li><div class="dish_img" onclick="javascript:showProductsDetails(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+imgurlnew+'\',\''+gst+'\',\''+data[i].description+'\',\''+data[i].colum9+'\',\''+cid+'\')">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\'>';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						else if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
					}
				
				}
				//str +='</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				//console.log("str"+str);
				
			}
				str +='</ul></div>';
				document.getElementById("menu"+cid).innerHTML=str;
			}

		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });


				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		

}



function showProductsDetails(itemcode,id,itemname,mrp,imgurl,gst,description,colum9,catid)
{  

			var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
			
			var str = '';

					
                        
						
						str +='<li style="list-style-type: none;"><div class="dish_img_pro">';
						str +='<img src="'+imgurl+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\'>';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+itemname+' <span class="meal_type">';
						
						if(colum9=='green_dot')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						else if(colum9=='red_dot')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						str +='<p class="dish_desc">'+description+'</p>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+mrp+'</div>'+
								'</div><div class="ui-block-b" style="display:none;">'+
								'<div class="menu_add_option" id="menu_prodet'+i+'">';
								
									str += '<div class="cart_qty">'+	
									       '<button onclick="" class="add_btn">ADD</button><br>'+
									       '</div>';
								
								'</div></div>'+
								'</div></div>'+
								'</li>';
					
				
				
				str +='</ul></div>';
				document.getElementById("prdctlist").innerHTML=str;


				if(mywishlist.indexOf(itemname)>=0)
				{
					document.getElementById("wishlist_div").innerHTML='<label class="wishlist_btn"><img src="assets/images/wishlist_icon_active.png" id="imgwish'+id+'" class="wishlist_btn2" onclick="javascript:remfromwish2(\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+colum9+'\',\''+imgurl+'\',\''+gst+'\',\''+catid+'\');" /></label>';
				}
				else 
				{
					document.getElementById("wishlist_div").innerHTML='<label class="wishlist_btn"><img src="assets/images/wishlist_icon1.png" id="imgwish'+id+'" class="wishlist_btn2" onclick="javascript:addtowish(\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+colum9+'\',\''+imgurl+'\',\''+gst+'\',\''+catid+'\');" /></label>';
				}


				$("#productpop").popup();
				$("#productpop").popup("open");

				//$.mobile.changePage( "#product_detail");
	  

}


function showProducts(cid,cname,gst)
{  
    
	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '0';

	'use strict';	
     //$('body').addClass('ui-loading');
	//document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';

	document.getElementById("header_title").innerHTML='';
    document.getElementById("header_title").innerHTML= cname;
	$.mobile.changePage( "#homepage");

	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';
	globalcid = cid;
	globalcname = cname;
	   $.ajax({
		 url: shopcmsurl+'getcat/getitems/'+loc+'/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {

			//console.log('ProductsData:'+JSON.stringify(data));
				
			var str = '<div class="menu_content"><ul>';

			var totlength = data.length;
            //console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("menusection").innerHTML=str;
			}
			else
			{
                //console.log('foodtype in products'+foodtype);
				for(var i=0;i<totlength;i++)
				{
					if(data[i].catid==cid && data[i].status=='1')
					{

                    var sale_price= data[i].sale_price;
					var mrp_regular = data[i].mrp;

					if(sale_price=='' || sale_price==null || sale_price=='null' || sale_price=='undefined' || sale_price=='0')
					{
						//data[i].mrp = data[i].mrp;
					}
					else
					{
					    data[i].mrp = data[i].sale_price;
					}

					data[i].howtouse = checkforundefined_wt(data[i].keyingredients);


					var imgurl= data[i].images;
					var imgurlnew = data[i].images;
                    var img_str_json=data[i].images;

					if(imgurlnew=='null' || imgurlnew==null || imgurlnew=='' || imgurlnew=='undefined')
					{
						imgurlnew = 'assets/images/No_Image_Available.png';
					}
					else
					{
					    imgurlnew= data[i].images[0];
					}

                    if(data[i].colum9 == null)
                    	data[i].colum9='';

                    if(foodtype=='VEG')
                    {
                    	
                   if(data[i].colum9=='green_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                   {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{

								
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else if(foodtype=='NON-VEG')
                    {

                    	
                    if(data[i].colum9=='red_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else
					{
						
						str +='<li><div class="dish_img" onclick="javascript:showProductsDetails(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+imgurlnew+'\',\''+gst+'\',\''+data[i].description+'\',\''+data[i].colum9+'\',\''+cid+'\')">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\'>';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						else if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">';

                        
						if(sale_price=='' || sale_price==null || sale_price=='null' || sale_price=='undefined' || sale_price=='0')
						{
							str +='<div class="dish_price">&#2547; '+data[i].mrp+'</div>';
						}
						else
						{
							str +='<div class="dish_price_mrp">&#2547; '+mrp_regular+'</div>';
							str +='<div class="dish_price">&#2547; '+sale_price+'</div>';
						}

						str +='</div><div class="ui-block-b">';
						str +='<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';

								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
					}
				
				}
				//str +='</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				//console.log("str"+str);
				
			}
				str +='</ul></div>';
				document.getElementById("menusection").innerHTML=str;
			}

		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });


				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		

}

function addProducts12(cid,cname,gst)
{  

	var loc= localStorage.getItem('selectedstoresmarket');
	//console.log('Menu Location: '+loc);

	'use strict';	
     //$('body').addClass('ui-loading');
	//document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	//$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';
	globalcid = cid;
	globalcname = cname;
	   $.ajax({
		 url: shopcmsurl+'getcat/getitems/'+loc+'/'+cid,
	     //url: shopcmsurl+'getcat/getitemsbysubcat/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			//console.log('ProductsData:'+JSON.stringify(data));
				
			var str = '';

			var totlength = data.length;
            //console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("catinnerdiv"+cid).innerHTML=str;
			}
			else
			{
                
				for(var i=0;i<totlength;i+=2)
				{

					str +='<div class="ui-grid-solo list">';

					if(i%2==0)
					{
					

					var imgurl= data[i].images;
					

                    var img_str_json=data[i].images;
                     var skuitem = new Array();
                     var skucombine = new Array();

                    if(data[i].variable.length>0)
                    {
                     skuitem = new Array();
                     skucombine = new Array();
                     //console.log(JSON.stringify(data[i].variable));
                       
                    for(var k=0;k<data[i].variable.length;k++)
                    {
                    var subskucode = Object.getOwnPropertyNames( data[i].variable[k] );
                    //console.log('subskucode'+Object.getOwnPropertyNames( data[i].variable[k] ));
                    var skuarr = Object.getOwnPropertyDescriptor(data[i].variable[k],variationid).value;
                    //console.log('skuarr'+skuarr);
                    /*var subskuprop = Object.getOwnPropertyNames( skuarr );
                    for(var t=0;t<subskuprop.length;t++){
                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
                    {
                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
                        {
                            //skuitem[k] = subskuprop[t]+'-'+skuproparr;
							skuitem[k] = skuproparr;
                            
                        }
                        else
                        {
                            //skuitem[k] = skuitem[k] +','+subskuprop[t]+'-'+skuproparr;
							skuitem[k] = skuitem[k] +','+skuproparr;
                            
                        }
                    }
                    
                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
                        {
                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                        else
                        {
                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                    }*/
                   
                    }
                    }

        			str +='<div class="ui-block-a">';
                    
            		str +='<div class="shop-thumb ajay">';                   
                    
                   
					str +='<div class="social_share">';
                    
					if(mywishlist.indexOf(data[i].itemcode)>=0){
					str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else {
						str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}
                      
                   // <a href="" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>
                
                    var psizetext = data[i].size;
					if( psizetext=='null' || psizetext==null || psizetext=='') 
						{
							psizetext='';
						}
					else
						{
							psizetext='-'+psizetext;
						}

                    if(data[i].description=='' || data[i].description==null || data[i].description=='null')
						{
							data[i].description= data[i].itemname;
						}

					str +='</div>';
                  //  str +='<img src='+imgurl+' class="img-responsive" alt=""/></a>';
                    str +='<div class="description">';
                    str +='<div class="pro_left">';
                    if(data[i].is_sale == '1')
                    {
                    str += '<div class="sale_badge">SALE</div>';   
                    }
                    if(data[i].is_featured == '1')
                    {
                    str += '<div class="deal_badge">%</div>';   
                    }
                    /*if(data[i].is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    } */                  
					str +='</div>';
                    str +='<div class="pro_right">';
					str +='<div class="ui-grid-a pd10">';
					str +='<div id="outofstock'+data[i].itemcode+'"></div>'
					str +='<div class="ui-block-a width60">';
                    str +='<a href="javascript:showshopdetail2(\''+data[i].itemcode+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+data[i].size+'\',\''+data[i].description+'\',\''+data[i].id+'\',\''+data[i].keyingredients+'\',\''+data[i].howtouse+'\',\''+data[i].moreinfo+'\',\''+data[i].gender+'\',\''+data[i].organic+'\',\''+data[i].fragrance+'\',\''+data[i].alchohol+'\',\''+i+'\',\''+img_str_json+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i].is_sale+'\',\''+data[i].is_featured+'\',\''+data[i].is_toprated+'\',\''+data[i].is_new+'\',\''+data[i].avg_rating+'\');">';
                	str +='<h3 class="product_name">';
                    if(data[i].colum9=='reddot')
                    {
                       str+='<img src="assets/images/reddot.png">';     
                    }
                    else if(data[i].colum9=='greendot')
                    {
                        str+='<img src="assets/images/greendot.png">';
                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i].itemname+ '</span>'+ psizetext;                   
                    
                    if(data[i].colum10=='c')
                    {
                       str+='<img src="assets/images/chilli.png">';     
                    }
                    if(data[i].is_new == '1')
                    {
                    str += '<sup class="new_product">New</sup>';   
                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
                     if(parseInt(data[i].avg_rating) > '0')
                    {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i].avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
                    str+='<div class="clear"></div>';
                    if(mycartlist.indexOf(data[i].itemcode)>=0){
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i].variable.length>0)
                    {   
                        $('#variable'+data[i].itemcode).val(elem[8]);          
                        var selarr = elem[8].split('$');
                        for(var s=0;s<selarr.length;s++)
                        {               
                            if(selarr[s].indexOf('mrp-')>=0)
                            {
                                var price = selarr[s].split('-');
                                //str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">INR '+price[1]+'/'+price[1]+' points</span></h2>';
								str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+price[1]+'</span></h2>';
                            }
                        }	
                    }
                    
                    }
                    else
                    {
                        //str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">INR '+data[i].mrp+'/'+data[i].mrp+' points</span></h2>';
						str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+data[i].mrp+'</span></h2>';
                    }
                    str +='</a>';
                    if(data[i].variable.length>0)
                    {
                     
                    if(mycartlist.indexOf(data[i].itemcode)>=0){
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].itemcode+'" id="variable'+data[i].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'same\',\''+data[i].images+'\',\''+gst+'\');"  class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].itemcode+'" id="variable'+data[i].itemcode+'" data-mini="true" data-inline="true" class="customise_select" >';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                        
                    }
                    str +='</select>';  
                    }
                    }
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					if(mycartlist.indexOf(data[i].itemcode)>=0){
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 	
                   
                    	str +='<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'sub\',\''+data[i].images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="'+elem[4]+'" title="Qty" class="qty">';
					
                        str +='<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'add\',\''+data[i].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
        
					}
					else
					{	str +='<input type="hidden" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="1" title="Qty" class="qty">';
						str +='<button onclick="javascript:buyfromshop(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}
					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i].description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';



					str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}
					if(typeof data[(i+1)] !='undefined')
					{
					if((i+1)%2==1)
					{
					
					//var imgurl= data[i+1].itemcode;
					var imgurl= data[i+1].images;
					//var imgurlmain= imgurl.trim();
                    /*var imgslider = JSON.parse(JSON.stringify(data[i+1].images));
                    var imgstr = [];
                    for(var j=0;j<imgslider.length;j++)
                    {
                        imgstr.push(imgslider[j]);
                    }*/

                    //var img_str_json1=JSON.stringify(data[i+1].images).replace(/"/g, '');
                    var img_str_json1=data[i+1].images;
                    var skuitem = new Array();
                     var skucombine = new Array();
                    if(data[i+1].variable.length>0)
                    {
                     skuitem = new Array();
                     skucombine = new Array();
                     //console.log(JSON.stringify(data[i+1].variable));
                       
                    for(var k=0;k<data[i+1].variable.length;k++)
                    {
                    var subskucode = Object.getOwnPropertyNames( data[i+1].variable[k] );
                    var skuarr = Object.getOwnPropertyDescriptor(data[i+1].variable[k],subskucode).value;
                    var subskuprop = Object.getOwnPropertyNames( skuarr );
                    for(var t=0;t<subskuprop.length;t++){
                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
                    {
                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
                        {
                            //skuitem[k] = subskuprop[t]+'-'+skuproparr;
							skuitem[k] = skuproparr;
                            
                        }
                        else
                        {
                            //skuitem[k] = skuitem[k] +','+subskuprop[t]+'-'+skuproparr;
							skuitem[k] = skuitem[k] +','+skuproparr;
                            
                        }
                    }
                    
                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
                        {
                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                        else
                        {
                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                    }
                   
                    }  
                    }
					str +='</div>';
					str +='<div class="ui-grid-solo list">';
					str +='<div class="ui-block-a">';
            		str +='<div class="shop-thumb">';
                    
                    
					str +='<div class="social_share">';
					if(mywishlist.indexOf(data[i+1].itemcode)>=0){
						str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else{
                    str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}

                    var psizetxt1 = data[i+1].size;
					if( psizetxt1=='null' || psizetxt1==null || psizetxt1=='') 
						{
							psizetxt1='';
						}
					else
						{
							psizetxt1='-'+psizetxt1;
						}

                    if(data[i+1].description=='' || data[i+1].description==null || data[i+1].description=='null')
						{
							data[i+1].description= data[i+1].itemname;
						}

					str +='</div>';
				  
                    str +='<div class="description">';
                    str +='<div class="pro_left">';
                    if(data[i+1].is_sale == '1')
                    {
                    str += '<div class="sale_badge">SALE</div>';   
                    }
                    if(data[i+1].is_featured == '1')
                    {
                    str += '<div class="deal_badge">%</div>';   
                    }
                    /*if(data[i+1].is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    }*/
                    str +='</div>';
                    str +='<div class="pro_right">';
                    str +='<div id="outofstock'+data[i+1].itemcode+'"></div>'
					str +='<div class="ui-grid-a pd10">';
					
					str +='<div class="ui-block-a width60">';
                    str +='<a href="javascript:showshopdetail2(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+data[i+1].size+'\',\''+data[i+1].description+'\',\''+data[i+1].id+'\',\''+data[i+1].keyingredients+'\',\''+data[i+1].howtouse+'\',\''+data[i+1].moreinfo+'\',\''+data[i+1].gender+'\',\''+data[i+1].organic+'\',\''+data[i+1].fragrance+'\',\''+data[i+1].alchohol+'\',\''+(i+1)+'\',\''+img_str_json1+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i+1].is_sale+'\',\''+data[i+1].is_featured+'\',\''+data[i+1].is_toprated+'\',\''+data[i+1].is_new+'\',\''+data[i+1].avg_rating+'\');">';
                	str +='<h3 class="product_name">';

					if(data[i+1].colum9=='reddot')
                    {
                       str+='<img src="assets/images/reddot.png">';     
                    }
                    else if(data[i+1].colum9=='greendot')
                    {
                        str+='<img src="assets/images/greendot.png">';
                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i+1].itemname+ '</span>'+ psizetxt1;                   
                    
                    if(data[i+1].colum10=='c')
                    {
                       str+='<img src="assets/images/chilli.png">';     
                    }
                    if(data[i+1].is_new == '1')
                    {
                    str += '<sup class="new_product">New</sup>';   
                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
                     if(parseInt(data[i+1].avg_rating) > '0')
                    {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i+1].avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
                    str+='<div class="clear"></div>';
                    if(mycartlist.indexOf(data[i+1].itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i+1].variable.length>0)
                    {   
                        $('#variable'+data[i+1].itemcode).val(elem[8]);          
                        var selarr = elem[8].split(',');
                        for(var s=0;s<selarr.length;s++)
                        {               
                            if(selarr[s].indexOf('mrp-')>=0)
                            {
                                var price = selarr[s].split('-');
                                //str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+price[1]+'/'+price[1]+' points</span></h2>';
								str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+price[1]+'</span></h2>';
                            }
                        }	
                    }
                    
                    }
                    else
                    {
						//str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+data[i+1].mrp+'/'+data[i+1].mrp+' points</span></h2>';
						str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+data[i+1].mrp+'</span></h2>';
                    }
                    str +='</a>';
                    if(data[i+1].variable.length>0)
                    {
                     
                    if(mycartlist.indexOf(data[i+1].itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'same\',\''+data[i+1].images+'\',\''+gst+'\');" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                        
                    }
                    str +='</select>';  
                    }
                    }
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					
					if(mycartlist.indexOf(data[i+1].itemcode)>=0)
					{
                        var j = mycartlist.indexOf(data[i+1].itemcode);
						mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                        var elem = mylist[j].split('|'); 
						str +='<button onclick="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'sub\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="'+elem[4]+'" title="Qty" class="qty">';
                        str +='<button onclick="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'add\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}
					else
					{
						str +='<input type="hidden" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="1" title="Qty" class="qty">';
						str +='<button onclick="javascript:buyfromshop(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}

					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i+1].description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';


					str +='</div>';                
					str +='</div>';
					}
					}
					str +='</div>';
					
				}
				
				
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("catinnerdiv"+cid).innerHTML=str;

			}
				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}


function showProducts_old(cid,cname,gst,cattype)
{  

	var loc= localStorage.getItem('selectedstoresmarket');
	console.log('Menu Location: '+loc);

	'use strict';	
     //$('body').addClass('ui-loading');
	document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
	
	   
				
	var str='';
	globalcid = cid;
	globalcname = cname;
    globalgst = gst;
    globalcattype = cattype;
    var finalurl='';
    if(globalcattype == 'cat')
    finalurl = shopcmsurl+'getcat/getitems/'+loc+'/'+cid;
    else
    finalurl = shopcmsurl+'getcat/getitemsbysubcat/'+cid;
	   $.ajax({
		 url: finalurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			//console.log('ProductsData:'+JSON.stringify(data));
			var str = '';

			var totlength = data.length;
            //console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				document.getElementById("prdctlist").innerHTML=str;
			}
			else
			{
                
				for(var i=0;i<totlength;i+=2)
				{

					str +='<div class="ui-grid-solo list">';

					if(i%2==0)
					{
					
					var imgurl= data[i].images;
                    var img_str_json=data[i].images;

					if(imgurl=='null' || imgurl==null || imgurl=='' || imgurl=='undefined')
					{
						imgurl = 'assets/images/No_Image_Available.jpg';
					}
					

                     var skuitem = new Array();
                     var skucombine = new Array();
                    if(data[i].variable.length>0)
                    {
                     skuitem = new Array();
                     skucombine = new Array();
                     //console.log(JSON.stringify(data[i].variable));
                       
                    for(var k=0;k<data[i].variable.length;k++)
                    {
                    /*var subskucode = Object.getOwnPropertyNames( data[i].variable[k] );
                    //console.log('subskucode'+Object.getOwnPropertyNames( data[i].variable[k] ));
                    var skuarr = Object.getOwnPropertyDescriptor(data[i].variable[k],subskucode).value;
                    var subskuprop = Object.getOwnPropertyNames( skuarr );
                    for(var t=0;t<subskuprop.length;t++){
                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
                    {
                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
                        {
                           skuitem[k] = skuproparr;
                            
                        }
                        else
                        {
                           skuitem[k] = skuitem[k] +','+skuproparr;
                            
                        }
                    }
                    
                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
                        {
                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                        else
                        {
                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                    }*/
                    skuitem[k] = data[i].variable[k].name;
                    skucombine[k] = data[i].variable[k].sku +'$mrp-'+ data[i].variable[k].price;
                   	
                    }
                    }

        			str +='<div class="ui-block-a">';
                    
            		str +='<div class="shop-thumb ajay">';                   
                    
                   
					str +='<div class="social_share">';
                    
					if(mywishlist.indexOf(data[i].itemcode)>=0){
					str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else {
						str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}
                      
                   // <a href="" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>
                
                    var psizetext = data[i].size;
					if( psizetext=='null' || psizetext==null || psizetext=='') 
						{
							psizetext='';
						}
					else
						{
							psizetext='-'+psizetext;
						}

                    if(data[i].description=='' || data[i].description==null || data[i].description=='null')
						{
							data[i].description= data[i].itemname;
						}

					str +='</div>';
                    str +='<img src='+imgurl+' class="img-responsive" alt=""/></a>';
                    str +='<div class="description1">';
                    str +='<div class="pro_left">';
                    if(data[i].is_sale == '1')
                    {
                    str += '<div class="sale_badge">SALE</div>';   
                    }
                    if(data[i].is_featured == '1')
                    {
                    str += '<div class="deal_badge">%</div>';   
                    }
                                      
					str +='</div>';
                    str +='<div class="pro_right">';
					str +='<div class="ui-grid-a pd10">';
					str +='<div id="outofstock'+data[i].itemcode+'"></div>'
					str +='<div class="ui-block-a width60">';
                    //str +='<a href="javascript:showshopdetail2(\''+data[i].itemcode+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+data[i].size+'\',\''+data[i].description+'\',\''+data[i].id+'\',\''+data[i].keyingredients+'\',\''+data[i].howtouse+'\',\''+data[i].moreinfo+'\',\''+data[i].gender+'\',\''+data[i].organic+'\',\''+data[i].fragrance+'\',\''+data[i].alchohol+'\',\''+i+'\',\''+img_str_json+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i].is_sale+'\',\''+data[i].is_featured+'\',\''+data[i].is_toprated+'\',\''+data[i].is_new+'\',\''+data[i].avg_rating+'\');">';
                	str +='<h3 class="product_name">';
                    if(data[i].colum9=='reddot')
                    {
                       str+='<img src="assets/images/reddot.png">';     
                    }
                    else if(data[i].colum9=='greendot')
                    {
                        str+='<img src="assets/images/greendot.png">';
                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i].itemname+ '</span>'+ psizetext;                   
                    
                    if(data[i].colum10=='c')
                    {
                       str+='<img src="assets/images/chilli.png">';     
                    }
                    if(data[i].is_new == '1')
                    {
                    str += '<sup class="new_product">New</sup>';   
                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
                     if(parseInt(data[i].avg_rating) > '0')
                    {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i].avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
                    str+='<div class="clear"></div>';
                    if(mycartlist.indexOf(data[i].itemcode)>=0){
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i].variable.length>0)
	                    {   
	                        $('#variable'+data[i].itemcode).val(elem[8]); 
	                        var pprice = elem[8].split('-');         
	                        var selarr = elem[9].split('$');
	                        //alert('selarr'+selarr);
	                        var tmpprice = 0;
	                        for(var s=0;s<selarr.length;s++)
	                        {               
	                            	//alert('selarr[s]'+selarr[s]);
	                                var price = selarr[s].split('@');
	                                //alert('price'+price);
	                                tmpprice = parseInt(tmpprice)+parseInt(price[1]);
	                                //alert('tmpprice'+tmpprice);
									
	                            
	                        }	
	                        tmpprice = parseInt(pprice[1]) + parseInt(tmpprice);
	                        str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+tmpprice+'</span></h2>';
	                    }
                    else
                    	{
							str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+data[i].mrp+'</span></h2>';
						}
                    
                    }
                    else
                    {
                        //str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">INR '+data[i].mrp+'/'+data[i].mrp+' points</span></h2>';
						if(data[i].variable.length>0)
                    	{
                    		
                    		 var price = skucombine[1].split('-');
                    		 
                    		str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+price[1]+'</span></h2>';
                    	}
                    	else
                    	{
							str +='<h2 class="price"><span id="priceblk'+data[i].itemcode+'">&#2547; '+data[i].mrp+'</span></h2>';
						}
                    }
                    //str +='</a>';
                    if(data[i].variable.length>0)
                    {
                    
                    if(mycartlist.indexOf(data[i].itemcode)>=0){
                    	
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].itemcode+'" id="variable'+data[i].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'same\',\''+data[i].images+'\',\''+gst+'\');"  class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {

                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].itemcode+'" id="variable'+data[i].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'same\',\''+data[i].images+'\',\''+gst+'\');"  class="customise_select">';
                    //str +='<option value="'+skucombine[0]+'">-Select-</option>';

                    for(var s=0;s<skucombine.length;s++)
                    {
                    	if(s==1)
                    	{
                    	str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';		
                    	}
                    	else
                    	{
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                    	}
                       // console.log('<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>');
                    }
                    str +='</select>';  

                    }
                    }
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					if(mycartlist.indexOf(data[i].itemcode)>=0){
					var j = mycartlist.indexOf(data[i].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 	
                   
                    	str +='<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'sub\',\''+data[i].images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="'+elem[4]+'" title="Qty" class="qty">';
					
                        str +='<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\'add\',\''+data[i].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
        
					}
					else
					{	str +='<input type="hidden" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="1" title="Qty" class="qty">';
						if(data[i].variable.length>0)
                    	{ 
                            str +='<div class="menu_add_option">';
                    		str +='<a onclick="javascript:addons(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\');" class="add_btn ui-link">ADD</a>';
							str +='</div>';
                    	}
                    	else
                    	{
							str +='<div class="menu_add_option">';
							str +='<a onclick="javascript:buyfromshop(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\',\''+data[i].images+'\',\''+gst+'\');" class="add_btn ui-link">ADD</a>';
							str +='</div>';
						}
					}
					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i].description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';



					str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}
					if(typeof data[(i+1)] !='undefined')
					{
					if((i+1)%2==1)
					{
					
					//var imgurl= data[i+1].itemcode;
					var imgurl= data[i+1].images;

					if(imgurl=='null' || imgurl==null || imgurl=='' || imgurl=='undefined')
					{
						imgurl = 'assets/images/No_Image_Available.jpg';
					}
					//var imgurlmain= imgurl.trim();
                    /*var imgslider = JSON.parse(JSON.stringify(data[i+1].images));
                    var imgstr = [];
                    for(var j=0;j<imgslider.length;j++)
                    {
                        imgstr.push(imgslider[j]);
                    }*/

                    //var img_str_json1=JSON.stringify(data[i+1].images).replace(/"/g, '');
                    var img_str_json1=data[i+1].images;
                    var skuitem = new Array();
                     var skucombine = new Array();
	                    if(data[i+1].variable.length>0)
	                    {
	                     skuitem = new Array();
	                     skucombine = new Array();
	                     //console.log(JSON.stringify(data[i+1].variable));
	                       
	                    for(var k=0;k<data[i+1].variable.length;k++)
	                    {
	                    /*var subskucode = Object.getOwnPropertyNames( data[i+1].variable[k] );
	                    var skuarr = Object.getOwnPropertyDescriptor(data[i+1].variable[k],subskucode).value;
	                    var subskuprop = Object.getOwnPropertyNames( skuarr );
	                    for(var t=0;t<subskuprop.length;t++){
	                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
	                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
	                    {
	                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
	                        {
	                            //skuitem[k] = subskuprop[t]+'-'+skuproparr;
								skuitem[k] = skuproparr;
	                            
	                        }
	                        else
	                        {
	                            //skuitem[k] = skuitem[k] +','+subskuprop[t]+'-'+skuproparr;
								skuitem[k] = skuitem[k] +','+skuproparr;
	                            
	                        }
	                    }
	                    
	                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
	                        {
	                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
	                            
	                        }
	                        else
	                        {
	                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
	                            
	                        }
	                    }*/

	                    skuitem[k] = data[i+1].variable[k].name;
                    	skucombine[k] = data[i+1].variable[k].sku +'$mrp-'+ data[i+1].variable[k].price;
	                   
	                    }  
	                    
	                    }
					str +='</div>';
					str +='<div class="ui-grid-solo list">';
					str +='<div class="ui-block-a">';
            		str +='<div class="shop-thumb">';
                    
                    
					str +='<div class="social_share">';
						if(mywishlist.indexOf(data[i+1].itemcode)>=0){
							str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
						}
						else{
	                    str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
						}

                    var psizetxt1 = data[i+1].size;
						if( psizetxt1=='null' || psizetxt1==null || psizetxt1=='') 
							{
								psizetxt1='';
							}
						else
							{
								psizetxt1='-'+psizetxt1;
							}

	                    if(data[i+1].description=='' || data[i+1].description==null || data[i+1].description=='null')
							{
								data[i+1].description= data[i+1].itemname;
							}

					str +='</div>';
				    str +='<img src='+imgurl+' class="img-responsive" alt=""/></a>';
                    str +='<div class="description1">';
                    str +='<div class="pro_left">';
	                    if(data[i+1].is_sale == '1')
	                    {
	                    str += '<div class="sale_badge">SALE</div>';   
	                    }
	                    if(data[i+1].is_featured == '1')
	                    {
	                    str += '<div class="deal_badge">%</div>';   
	                    }
                    /*if(data[i+1].is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    }*/
                    str +='</div>';
                    str +='<div class="pro_right">';
                    str +='<div id="outofstock'+data[i+1].itemcode+'"></div>'
					str +='<div class="ui-grid-a pd10">';
					
					str +='<div class="ui-block-a width60">';
                    //str +='<a href="javascript:showshopdetail2(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+data[i+1].size+'\',\''+data[i+1].description+'\',\''+data[i+1].id+'\',\''+data[i+1].keyingredients+'\',\''+data[i+1].howtouse+'\',\''+data[i+1].moreinfo+'\',\''+data[i+1].gender+'\',\''+data[i+1].organic+'\',\''+data[i+1].fragrance+'\',\''+data[i+1].alchohol+'\',\''+(i+1)+'\',\''+img_str_json1+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i+1].is_sale+'\',\''+data[i+1].is_featured+'\',\''+data[i+1].is_toprated+'\',\''+data[i+1].is_new+'\',\''+data[i+1].avg_rating+'\');">';
                	str +='<h3 class="product_name">';

						if(data[i+1].colum9=='reddot')
	                    {
	                       str+='<img src="assets/images/reddot.png">';     
	                    }
	                    else if(data[i+1].colum9=='greendot')
	                    {
	                        str+='<img src="assets/images/greendot.png">';
	                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i+1].itemname+ '</span>'+ psizetxt1;                   
                    
	                    if(data[i+1].colum10=='c')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
	                    if(data[i+1].is_new == '1')
	                    {
	                    str += '<sup class="new_product">New</sup>';   
	                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
	                     if(parseInt(data[i+1].avg_rating) > '0')
	                    {
	                    str += '<div class="rating">';
	                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i+1].avg_rating+'" />';
	                    str += '<div class="inactive" data-value="1"></div>';
	                    str += '<div class="inactive" data-value="2"></div>';
	                    str += '<div class="inactive" data-value="3"></div>';
	                    str += '<div class="inactive" data-value="4"></div>';
	                    str += '<div class="inactive" data-value="5"></div>';
	                    str += '</div>';   
	                    }
                    str+='<div class="clear"></div>';
                    if(mycartlist.indexOf(data[i+1].itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i+1].variable.length>0)
                    {   
                         $('#variable'+data[i+1].itemcode).val(elem[8]);  
                         var pprice = elem[8].split('-');         
                        var selarr = elem[9].split('$');
                        var tmpprice = 0;
	                        for(var s=0;s<selarr.length;s++)
	                        {               
	                            
	                                var price = selarr[s].split('@');
	                                tmpprice = parseInt(tmpprice)+parseInt(price[1]);
									
	                            
	                        }	
	                        tmpprice = parseInt(pprice[1]) + parseInt(tmpprice);
	                        str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">&#2547; '+tmpprice+'</span></h2>';
                       	
                    }
                    else
                    	{
							str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">&#2547; '+data[i+1].mrp+'</span></h2>';
						}
                    
                    }
                    else
                    {
						//str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+data[i+1].mrp+'/'+data[i+1].mrp+' points</span></h2>';
						if(data[i+1].variable.length>0)
                    	{
                    		var price = skucombine[1].split('-');
                    		str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">&#2547; '+price[1]+'</span></h2>';
                    	}
                    	else
                    	{
							str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">&#2547; '+data[i+1].mrp+'</span></h2>';
						}
                    }
                    //str +='</a>';
                    if(data[i+1].variable.length>0)
                    {
                     
                    if(mycartlist.indexOf(data[i+1].itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'same\',\''+data[i+1].images+'\',\''+gst+'\');" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'same\',\''+data[i+1].images+'\',\''+gst+'\');" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                    	if(s==1)
                    	{
                    	str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';		
                    	}
                    	else
                    	{
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                    	}
                        
                    }
                    str +='</select>';  
                    }
                    }
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					
						if(mycartlist.indexOf(data[i+1].itemcode)>=0)
						{
	                        var j = mycartlist.indexOf(data[i+1].itemcode);
							mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                        var elem = mylist[j].split('|'); 
							str +='<button onclick="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'sub\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
							str +='<input type="text" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="'+elem[4]+'" title="Qty" class="qty">';
	                        str +='<button onclick="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'add\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
						}
						else
						{
							str +='<input type="hidden" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="1" title="Qty" class="qty">';
							if(data[i+1].variable.length>0)
	                    	{ 
								str +='<div class="menu_add_option">';
	                    		str +='<a onclick="javascript:addons(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\');" class="add_btn ui-link">ADD</a>';
								str +='</div>';
	                    	}
	                    	else
	                    	{
								str +='<div class="menu_add_option">';
								str +='<a onclick="javascript:buyfromshop(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\''+data[i+1].images+'\',\''+gst+'\');" class="add_btn ui-link">ADD</a>';
								str +='</div>';
							}
						}

					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i+1].description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';


					str +='</div>';                
					str +='</div>';
					}
					}
					str +='</div>';
					
				}
				
				
				document.getElementById("prdctlist").innerHTML=str;

			}
				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  

}

function showDeals()
{  

	var loc= localStorage.getItem('selectedstoresmarket');
	//console.log('Menu Location: '+loc);
    var gst='0';
	'use strict';	
     //$('body').addClass('ui-loading');
	document.getElementById("cat_header").innerHTML='<span>Deals</span>';
    document.getElementById("prdctlist").innerHTML='';
	$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';

	   $.ajax({
		 url: shopcmsurl+'getcat/get_deals/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(json));
				
				var str = '';
                if(data!=null)
                {
				var totlength = data.length;
                //console.log('totlength....'+totlength);
                

				for(var i=0;i<totlength;i+=2)
				{
                    //console.log('data[i].product1...'+data[i].product1);
                   
					str +='<div class="ui-grid-solo list">';

					if(i%2==0)
					{
					
					var imgurl= data[i].product1.images;
					

                    var img_str_json=data[i].product1.images;
                     var skuitem = new Array();
                     var skucombine = new Array();
                   /* if(typeof data[i].product1.variable !=undefined && data[i].product1.variable.length>0)
                    {
                     skuitem = new Array();
                     skucombine = new Array();
                     console.log(JSON.stringify(data[i].product1.variable));
                       
                    for(var k=0;k<data[i].product1.variable.length;k++)
                    {
                    var subskucode = Object.getOwnPropertyNames( data[i].product1.variable[k] );
                    //console.log('subskucode'+Object.getOwnPropertyNames( data[i].variable[k] ));
                    var skuarr = Object.getOwnPropertyDescriptor(data[i].product1.variable[k],subskucode).value;
                    var subskuprop = Object.getOwnPropertyNames( skuarr );
                    for(var t=0;t<subskuprop.length;t++){
                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
                    {
                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
                        {
                            skuitem[k] = subskuprop[t]+'-'+skuproparr;
                            
                        }
                        else
                        {
                            skuitem[k] = skuitem[k] +','+subskuprop[t]+'-'+skuproparr;
                            
                        }
                    }
                    
                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
                        {
                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                        else
                        {
                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                    }
                   
                    }
                    }*/

        			str +='<div class="ui-block-a">';
                    
            		str +='<div class="shop-thumb ajay">';                   
                    
                   //console.log('itemcode.....'+data[i].product1.itemcode);
					str +='<div class="social_share">';
                    
					if(mywishlist.indexOf(data[i].product1.itemcode)>=0){
					str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].product1.size+'\',\''+data[i].product1.images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else {
						str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].product1.size+'\',\''+data[i].product1.images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}
                      
                   // <a href="" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>
                
                    var psizetext = data[i].product1.size;
					if( psizetext=='null' || psizetext==null || psizetext=='') 
						{
							psizetext='';
						}
					else
						{
							psizetext='-'+psizetext;
						}

                    if(data[i].product1.description=='' || data[i].product1.description==null || data[i].product1.description=='null')
						{
							data[i].product1.description= data[i].itemname;
						}

					str +='</div>';
                  //  str +='<img src='+imgurl+' class="img-responsive" alt=""/></a>';
                    str +='<div class="description">';
                    str +='<div class="pro_left">';
                    if(data[i].product1.is_sale == '1')
                    {
                    str += '<div class="sale_badge">SALE</div>';   
                    }
                    if(data[i].product1.is_featured == '1')
                    {
                    str += '<div class="deal_badge">%</div>';   
                    }
                    /*if(data[i].is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    } */                  
					str +='</div>';
                    str +='<div class="pro_right">';
					str +='<div class="ui-grid-a pd10">';
					str +='<div id="outofstock'+data[i].product1.itemcode+'"></div>'
					str +='<div class="ui-block-a width60">';
                    str +='<a href="javascript:showshopdetail2(\''+data[i].product1.itemcode+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+data[i].product1.size+'\',\''+data[i].product1.description+'\',\''+data[i].product1.id+'\',\''+data[i].product1.keyingredients+'\',\''+data[i].product1.howtouse+'\',\''+data[i].product1.moreinfo+'\',\''+data[i].product1.gender+'\',\''+data[i].product1.organic+'\',\''+data[i].product1.fragrance+'\',\''+data[i].product1.alchohol+'\',\''+i+'\',\''+img_str_json+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i].product1.is_sale+'\',\''+data[i].product1.is_featured+'\',\''+data[i].product1.is_toprated+'\',\''+data[i].product1.is_new+'\',\''+data[i].product1.avg_rating+'\');">';
                	str +='<h3 class="product_name">';
                    if(data[i].product1.colum9=='reddot')
                    {
                       str+='<img src="assets/images/reddot.png">';     
                    }
                    else if(data[i].product1.colum9=='greendot')
                    {
                        str+='<img src="assets/images/greendot.png">';
                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i].product1.itemname+ '</span>'+ psizetext;                   
                    
                    if(data[i].product1.colum10=='c')
                    {
                       str+='<img src="assets/images/chilli.png">';     
                    }
                    if(data[i].product1.is_new == '1')
                    {
                    str += '<sup class="new_product">New</sup>';   
                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
                     if(parseInt(data[i].product1.avg_rating) > '0')
                    {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i].product1.avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
                    str+='<div class="clear"></div>';
                   /* if(mycartlist.indexOf(data[i].product1.itemcode)>=0){
					var j = mycartlist.indexOf(data[i].product1.itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i].product1.variable.length>0)
                    {   
                        $('#variable'+data[i].product1.itemcode).val(elem[8]);          
                        var selarr = elem[8].split('$');
                        for(var s=0;s<selarr.length;s++)
                        {               
                            if(selarr[s].indexOf('mrp-')>=0)
                            {
                                var price = selarr[s].split('-');
                                str +='<h2 class="price"><span id="priceblk'+data[i].product1.itemcode+'">INR '+price[1]+'</span></h2>';
                            }
                        }	
                    }
                    
                    }
                    else
                    {*/
                        str +='<h2 class="price"><span style="text-decoration: line-through; color: red;">&#2547; '+data[i].product1.mrp+'</span><span>Deal Price INR '+data[i].product1.mrp+'</span></h2>';
                    //}
                    str +='</a>';
                    /*if(data[i].product1.variable.length>0)
                    {
                     
                    if(mycartlist.indexOf(data[i].product1.itemcode)>=0){
					var j = mycartlist.indexOf(data[i].product1.itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].product1.itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].product1.itemcode+'" id="variable'+data[i].product1.itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].product1.size+'\',\'same\',\''+data[i].product1.images+'\',\''+gst+'\');"  class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i].product1.itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i].product1.itemcode+'" id="variable'+data[i].product1.itemcode+'" data-mini="true" data-inline="true" class="customise_select" >';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                        
                    }
                    str +='</select>';  
                    }
                    }*/
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					if(mycartlist.indexOf(data[i].product1.itemcode)>=0){
					var j = mycartlist.indexOf(data[i].product1.itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 	
                   
                    	str +='<button onclick="javascript:updateshopcart(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qtydeal'+i+'\',\''+data[i].product1.size+'\',\'sub\',\''+data[i].product1.images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qtydeal'+i+'" id="qtydeal'+i+'" value="'+elem[4]+'" title="Qty" class="qty">';
					
                        str +='<button onclick="javascript:updateshopcart(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qtydeal'+i+'\',\''+data[i].product1.size+'\',\'add\',\''+data[i].product1.images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
        
					}
					else
					{	str +='<input type="hidden" data-role="none" min="1" name="qtydeal'+i+'" id="qtydeal'+i+'" value="1" title="Qty" class="qty">';
						str +='<button onclick="javascript:buyfromshop(\''+data[i].product1.itemcode+'\',\''+data[i].product1.id+'\',\''+data[i].product1.itemname+'\',\''+data[i].product1.mrp+'\',\''+i+'\',\'qtydeal'+i+'\',\''+data[i].product1.size+'\',\''+data[i].product1.images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}
					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i].product1.description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';



					str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}
					if(typeof data[(i+1)] !='undefined')
					{
					if((i+1)%2==1)
					{
					
					//var imgurl= data[i+1].itemcode;
					var imgurl= data[i+1].product2.images;
					//var imgurlmain= imgurl.trim();
                    /*var imgslider = JSON.parse(JSON.stringify(data[i+1].images));
                    var imgstr = [];
                    for(var j=0;j<imgslider.length;j++)
                    {
                        imgstr.push(imgslider[j]);
                    }*/

                    //var img_str_json1=JSON.stringify(data[i+1].images).replace(/"/g, '');
                    var img_str_json1=data[i+1].product2.images;
                    var skuitem = new Array();
                     var skucombine = new Array();
                    if(data[i+1].variable.length>0)
                    {
                     skuitem = new Array();
                     skucombine = new Array();
                     //console.log(JSON.stringify(data[i+1].variable));
                       
                    /*for(var k=0;k<data[i+1].variable.length;k++)
                    {
                    var subskucode = Object.getOwnPropertyNames( data[i+1].variable[k] );
                    var skuarr = Object.getOwnPropertyDescriptor(data[i+1].variable[k],subskucode).value;
                    var subskuprop = Object.getOwnPropertyNames( skuarr );
                    for(var t=0;t<subskuprop.length;t++){
                    var skuproparr = Object.getOwnPropertyDescriptor(skuarr,subskuprop[t]).value;
                    if(subskuprop[t] !='mrp' && subskuprop[t] != 'stock' && subskuprop[t] !='sale_price')
                    {
                        if(skuitem[k] == undefined || skuitem[k] == null || skuitem[k] == '')
                        {
                            skuitem[k] = subskuprop[t]+'-'+skuproparr;
                            
                        }
                        else
                        {
                            skuitem[k] = skuitem[k] +','+subskuprop[t]+'-'+skuproparr;
                            
                        }
                    }
                    
                    if(skucombine[k] == undefined || skucombine[k] == null || skucombine[k] == '')
                        {
                            skucombine[k] = subskucode +':'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                        else
                        {
                            skucombine[k] = skucombine[k] +'$'+ subskuprop[t] +'-'+skuproparr;
                            
                        }
                    }
                   
                    }  
                    }*/
					str +='</div>';
					str +='<div class="ui-grid-solo list">';
					str +='<div class="ui-block-a">';
            		str +='<div class="shop-thumb">';
                    
                    
					str +='<div class="social_share">';
					if(mywishlist.indexOf(data[i+1].product2.itemcode)>=0){
						str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+(i+1)+'\',\'qtydeal'+(i+1)+'\',\''+data[i+1].product2.size+'\',\''+data[i+1].product2.images+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else{
                    str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+(i+1)+'\',\'qtydeal'+(i+1)+'\',\''+data[i+1].product2.size+'\',\''+data[i+1].product2.images+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}

                    var psizetxt1 = data[i+1].product2.size;
					if( psizetxt1=='null' || psizetxt1==null || psizetxt1=='') 
						{
							psizetxt1='';
						}
					else
						{
							psizetxt1='-'+psizetxt1;
						}

                    if(data[i+1].product2.description=='' || data[i+1].product2.description==null || data[i+1].product2.description=='null')
						{
							data[i+1].product2.description= data[i+1].product2.itemname;
						}

					str +='</div>';
				  
                    str +='<div class="description">';
                    str +='<div class="pro_left">';
                    if(data[i+1].product2.is_sale == '1')
                    {
                    str += '<div class="sale_badge">SALE</div>';   
                    }
                    if(data[i+1].product2.is_featured == '1')
                    {
                    str += '<div class="deal_badge">%</div>';   
                    }
                    /*if(data[i+1].is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    }*/
                    str +='</div>';
                    str +='<div class="pro_right">';
                    str +='<div id="outofstock'+data[i+1].product2.itemcode+'"></div>'
					str +='<div class="ui-grid-a pd10">';
					
					str +='<div class="ui-block-a width60">';
                    str +='<a href="javascript:showshopdetail2(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+data[i+1].product2.size+'\',\''+data[i+1].product2.description+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.keyingredients+'\',\''+data[i+1].product2.howtouse+'\',\''+data[i+1].product2.moreinfo+'\',\''+data[i+1].product2.gender+'\',\''+data[i+1].product2.organic+'\',\''+data[i+1].product2.fragrance+'\',\''+data[i+1].product2.alchohol+'\',\''+(i+1)+'\',\''+img_str_json1+'\',\''+gst+'\',\''+skuitem.toString()+'\',\''+skucombine.toString()+'\',\''+data[i+1].product2.is_sale+'\',\''+data[i+1].product2.is_featured+'\',\''+data[i+1].product2.is_toprated+'\',\''+data[i+1].product2.is_new+'\',\''+data[i+1].product2.avg_rating+'\');">';
                	str +='<h3 class="product_name">';

					if(data[i+1].product2.colum9=='reddot')
                    {
                       str+='<img src="assets/images/reddot.png">';     
                    }
                    else if(data[i+1].product2.colum9=='greendot')
                    {
                        str+='<img src="assets/images/greendot.png">';
                    }                    
                    str +='<span style="vertical-align:middle; display:inline-block">'+data[i+1].product2.itemname+ '</span>'+ psizetxt1;                   
                    
                    if(data[i+1].product2.colum10=='c')
                    {
                       str+='<img src="assets/images/chilli.png">';     
                    }
                    if(data[i+1].product2.is_new == '1')
                    {
                    str += '<sup class="new_product">New</sup>';   
                    }
                    str+='</h3>';
                    str+='<div class="clear"></div>';
                     if(parseInt(data[i+1].product2.avg_rating) > '0')
                    {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ data[i+1].product2.avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
                    str+='<div class="clear"></div>';
                   /* if(mycartlist.indexOf(data[i+1].product2.itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].product2.itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(data[i+1].product2.variable.length>0)
                    {   
                        $('#variable'+data[i+1].product2.itemcode).val(elem[8]);          
                        var selarr = elem[8].split(',');
                        for(var s=0;s<selarr.length;s++)
                        {               
                            if(selarr[s].indexOf('mrp-')>=0)
                            {
                                var price = selarr[s].split('-');
                                str +='<h2 class="price"><span id="priceblk'+data[i+1].itemcode+'">INR '+price[1]+'</span></h2>';
                            }
                        }	
                    }
                    
                    }
                    else
                    {*/
                    str +='<h2 class="price"><span style="text-decoration: line-through; color: red;">&#2547; '+data[i+1].product2.mrp+'</span></h2>';
                   // }
                    str +='</a>';
                   /* if(data[i+1].variable.length>0)
                    {
                     
                    if(mycartlist.indexOf(data[i+1].product2.itemcode)>=0){
					var j = mycartlist.indexOf(data[i+1].itemcode);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\',\'same\',\''+data[i+1].images+'\',\''+gst+'\');" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    }
                    else
                    {
                    str+='<div class="clear"></div>';
                    str +='<label for="variable'+data[i+1].itemcode+'" class="select">Customise</label>';
			        str +='<select name="variable'+data[i+1].itemcode+'" id="variable'+data[i+1].itemcode+'" data-mini="true" data-inline="true" class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                        
                    }
                    str +='</select>';  
                    }*/
                    }
					str +='</div>';
					
					str +='<div class="ui-block-b width40 text-right">';
					
					if(mycartlist.indexOf(data[i+1].product2.itemcode)>=0)
					{
                        var j = mycartlist.indexOf(data[i+1].product2.itemcode);
						mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                        var elem = mylist[j].split('|'); 
						str +='<button onclick="javascript:updateshopcart(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+(i+1)+'\',\'qtydeal'+(i+1)+'\',\''+data[i+1].product2.size+'\',\'sub\',\''+data[i+1].product2.images+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qtydeal'+(i+1)+'" id="qtydeal'+(i+1)+'" value="'+elem[4]+'" title="Qty" class="qty">';
                        str +='<button onclick="javascript:updateshopcart(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+(i+1)+'\',\'qtydeal'+(i+1)+'\',\''+data[i+1].product2.size+'\',\'add\',\''+data[i+1].product2.images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}
					else
					{
						str +='<input type="hidden" data-role="none" min="1" name="qtydeal'+(i+1)+'" id="qtydeal'+(i+1)+'" value="1" title="Qty" class="qty">';
						str +='<button onclick="javascript:buyfromshop(\''+data[i+1].product2.itemcode+'\',\''+data[i+1].product2.id+'\',\''+data[i+1].product2.itemname+'\',\''+data[i+1].product2.mrp+'\',\''+(i+1)+'\',\'qtydeal'+(i+1)+'\',\''+data[i+1].product2.size+'\',\''+data[i+1].product2.images+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}

					str +='</div>';
					str +='</div>';
					str +='<div class="ui-grid-solo">';
					str +='<a href="#" onclick="showMore(this)" class="more_btn">...</a>';
					str +='<div class="more_description">';
					str +='<p>'+data[i+1].product2.description+'</p>';
					str +='</div>';
					str +='</div>';
					str +='</div>';


					str +='</div>';                
					str +='</div>';
					}
					}
					str +='</div>';
					
				}
        }
		else
        {
            str='No Items found';
        }		
				document.getElementById("prdctlist").innerHTML=str;
				//$('body').removeClass('ui-loading');

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function showProducts1(cid,cname)
{  
	'use strict';
	//$('body').addClass('ui-loading');
	document.getElementById("cat_header").innerHTML='<a href="#Menu_sidebar"><img src="assets/images/dots_inner.png" alt="" /></a><span>'+cname+'</span>';
	$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
	
	   
				
	var str='';
	globalcid = cid;
	globalcname = cname;
	   $.ajax({
		 url: shopcms+'getcat/getitems/'+cid+'/'+brand_id+'/'+user.mobile,
		 type: 'GET',
		 timeout: 50000,
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';

				/*var totlength = data.length;
				console.log('totlength....'+totlength);*/

				
				
				document.getElementById("prdctlist").innerHTML=data;
				//$('body').removeClass('ui-loading');
				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				var items = mylist.length;
                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}
function searchprodname(cid)
{  
	
	var str='';
	
	   $.ajax({
		 url: shopcms+'getcat/getitemssearch/'+cid+'/'+brand_id+'/'+user.mobile,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				document.getElementById("prdctlist").innerHTML=data;
				document.getElementById("cat_header").innerHTML=cid;
				$.mobile.changePage( "#products");

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				var items = mylist.length;
                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}


function searchprod()
{  
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
    var cid=$('#searchinput').val();
    //alert(cid);
	var str='';
	
	   $.ajax({
		 url: shopcms+'getcat/getitemssearch/'+cid+'/'+brand_id+'/'+user.mobile,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				document.getElementById("prdctlist").innerHTML=data;
				document.getElementById("cat_header").innerHTML=cid;
				$.mobile.changePage( "#products");

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				var items = mylist.length;
                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function searchbyitemprice()
{  
    var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
    var cid=$('input[name="radio-choice"]:checked').val();
   // alert(cid);
	var str='';
   
	   $.ajax({
		 url: shopcms+'getcat/getitemprice/'+cid+'/'+brand_id+'/'+user.mobile,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
                document.getElementById("prdctlist").innerHTML=data;
				document.getElementById("cat_header").innerHTML=cid;
				$.mobile.changePage( "#products");

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				var items = mylist.length;
                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function showshopdetail(code,name,mrp,size,desc,id,key,howtouse,more,gender,organic,fragrance,alchohol,i,imgstr,gst,sitem,scombine,is_sale,is_featured,is_toprated,is_new,avg_rating)
{
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"));
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
    var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];

	var imgurlmain= code.trim();
    if(gender=='' || gender=='undefined')
		gender='Not Specified';
	if(key=='' || key=='undefined')
		key='Not Specified';
    var str='';
                  /*  if(is_sale == '1')
                    {
                    str += '<img src="assets/images/sale_batch.png" alt="">';   
                    }
                    if(is_featured == '1')
                    {
                    str += '<img src="assets/images/best_deals_batch.png" alt="">';   
                    }
                    if(is_toprated == '1')
                    {
                    str += '<img src="assets/images/top-rated.png" alt="">';   
                    }
                    */
                    
	if(size=='' || size=='undefined' || size=='null')
	{
        document.getElementById("proddetailname").innerHTML=str + '<div id="outofstockdet'+code+'"></div>'+name;
	}
	else
	{
		document.getElementById("proddetailname").innerHTML=str + '<div id="outofstockdet'+code+'"></div>'+name+'-'+size;
	}
    //if(is_new == '1')
      //  {
      //  str += '<img src="assets/images/new_arrival_batch.png" alt="">';   
      //  }
    if(parseInt(avg_rating) > '0')
        {
                    str += '<div class="rating">';
                    str += ' <input type="range" class="rating_stars" min="1" max="5" step="1" value="'+ avg_rating+'" />';
                    str += '<div class="inactive" data-value="1"></div>';
                    str += '<div class="inactive" data-value="2"></div>';
                    str += '<div class="inactive" data-value="3"></div>';
                    str += '<div class="inactive" data-value="4"></div>';
                    str += '<div class="inactive" data-value="5"></div>';
                    str += '</div>';   
                    }
    if(sitem.length>0)
    {
    var skuitem = sitem.split(',');
    var skucombine = scombine.split(',');  
                if(mycartlist.indexOf(code)>=0){
					var j = mycartlist.indexOf(code);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    str+='<div class="clear"></div>';
                    str ='<label for="variabledet'+code+'" class="select">Customise</label>';
			        str +='<select name="variabledet'+code+'" id="variabledet'+code+'" data-mini="true" data-inline="true" onchange="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+i+'\',\''+size+'\',\'same\',\''+imgstr+'\',\''+gst+'\');"  class="customise_select">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        //console.log('elem[8]'+elem[8]); 
                        //console.log('skucombine[s]'+skucombine[s]);
                        if(elem[8]==skucombine[s])
                        {
                          str +='<option value="'+skucombine[s]+'" selected>'+skuitem[s]+'</option>';  
                        }
                        else
                        {
                          str +='<option value="'+skucombine[s]+'" >'+skuitem[s]+'</option>';  
                        }
                        
                        
                    }
                    str +='</select>';
                    document.getElementById("productvariation").innerHTML=str; 
                    }
                    else
                    {
                    str+='<div class="clear"></div>';               
                    str ='<label for="variabledet'+code+'" class="select">Customise</label>';
			        str +='<select name="variabledet'+code+'" id="variabledet'+code+'" data-mini="true" data-inline="true" class="customise_select" data-role="none">';
                    str +='<option value="'+skucombine[0]+'">-Select-</option>';
                    for(var s=0;s<skucombine.length;s++)
                    {
                        if(typeof skuitem[s]!=undefined && skuitem[s]!=undefined)
                        {
                        str +='<option value="'+skucombine[s]+'">'+skuitem[s]+'</option>';
                        }
                    }
                    str +='</select>';
                    document.getElementById("productvariation").innerHTML=str;  
                    }
                    }
	//document.getElementById("itemnmhdr").innerHTML=name;
    if(mycartlist.length>0 && mycartlist.indexOf(code)>=0){
					var j = mycartlist.indexOf(code);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 
                    if(sitem.length>0)
                    {   
                        var selarr = elem[8].split('$');
                        for(var s=0;s<selarr.length;s++)
                        {               
                            if(selarr[s].indexOf('mrp-')>=0)
                            {
                                var price = selarr[s].split('-');
                                document.getElementById("proddetailprice").innerHTML='&#2547; '+price[1]+'/'+price[1]+' points';
                            }
                        }	
                    }
                    
                    }
                    else
                    {
	                        document.getElementById("proddetailprice").innerHTML='&#2547; '+mrp+'/'+mrp+' points';
                    }
	//$('#product_slider').removeData("excoloslider"); 

    
    
    /*var imgslider = JSON.parse(JSON.stringify(imgstr));
    imgslider = imgslider.replace(/[\[\]']+/g,'');
   
    var imgstrarr = imgslider.split(',');
    var imgstr1='';
    for(var j=0;j<imgstrarr.length;j++)
    {
       
     //imgstr1 = imgstr1+'<img src="'+shopcmsurl+'uploads/products/'+code+'.jpg" alt="">';
	 imgstr1 = imgstr1+'<img src='+imgstr+' alt="">';
    // alert('imgstr1'+imgstr1);
    }
    document.getElementById("product_slider").innerHTML= imgstr1;*/
    //setdetailpagebanner();
    var imgslides = JSON.parse(JSON.stringify(imgstr));
	imgslides = imgslides.replace(/[\[\]']+/g,'');
    
    var str ='';
	var imgstrarr = imgslides.split(',');
    for(var i=0;i<imgstrarr.length;i++)
    {
        //str = str + '<img src="'+imgslides+'">';
    }
    //alert('finally...'+str);
	//document.getElementById("product_slider").innerHTML= str;  Temporarily commented By Ajay Kumar
	//setdetailpagebanner();
    
	//var str ='<div style="padding:10px"><table><tr><td>Qty:</td><td><input type="number" min="1" data-role="none" name="qtydet'+id+'" id="qtydet'+id+'" value="1" title="Qty" class="qty1"></td></tr></table></div>';
	//str +='<button onclick="javascript:buyfromshop(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+size+'\');" class="add_to_cart" data-role="none">Add to Cart</button>';
	/*str += '<div class="ui-block-a">';
	
		str +='<a href="javascript:addtowish(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+size+'\');" class="shop-add-btn add_wishlist"  data-role="button"><img src="assets/images/add_wishlist.png" alt=""/> <span>Add To Wishlist</span></a>';
	
	str +='</div>';*/
	
   // str += '<div class="ui-block"><a href="javascript:buyfromshop(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+size+'\',\''+imgstr+'\',\''+gst+'\');" class="shop-add-btn add_bag" data-role="button"><img src="assets/images/add_bag.png" alt=""/> <span>Add To Cart</span></a></div>';
   str +='<div class="social_share">';
 if(mywishlist.indexOf(code)>=0){
					str +='<a href="javascript:void(0)" onclick="javascript:remfromwish(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+size+'\',\''+imgstr+'\',\''+gst+'\',\'product\');" class="ui-link"><img src="assets/images/wishlist.png" alt=""></a>';
					}
					else {
						str +='<a href="javascript:void(0)" onclick="javascript:addtowish(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+i+'\',\''+size+'\',\''+imgstr+'\',\''+gst+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					}
                   str +='</div>'; 
   if(mycartlist.indexOf(code)>=0){
					var j = mycartlist.indexOf(code);
                    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
                    var elem = mylist[j].split('|'); 	
                   
                    	str ='<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+i+'\',\''+size+'\',\'sub\',\''+imgstr+'\',\''+gst+'\');" class="add_to_cart pb5" data-role="none">-</button>';
						str +='<input type="text" data-role="none" min="1" name="qtydet'+i+'" id="qtydet'+i+'" value="'+elem[4]+'" title="Qty" class="qty">';
					
                        str +='<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+i+'\',\''+size+'\',\'add\',\''+imgstr+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
        
					}
					else
					{	str +='<input type="hidden" data-role="none" min="1" name="qtydet'+i+'" id="qtydet'+i+'" value="1" title="Qty" class="qty">';
						str +='<button onclick="javascript:buyfromshop(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+i+'\',\'qtydet'+id+'\',\''+size+'\',\''+imgstr+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';
					}
    document.getElementById("paydiv").innerHTML=str;
	document.getElementById("one").innerHTML='<p>'+desc+'</p><p>Key ingredients</p><p>'+key+'</p>';
	document.getElementById("two").innerHTML=howtouse;
	document.getElementById("three").innerHTML='<p>'+more+'</p><p>Used By</p><p>'+gender+'</p><br/>';
	/*	
	   $.ajax({
		 url: 'http://13.71.80.78/projects/mloyalshops/jpearls/getcat/getsimilaritems/'+id,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
                //var str1 = '';
                if(data.length>0)
                {$('#similaritems').css('display','block');}
				for(var i=0;i<data.length;i++)
				{
				    str +='<div class="swiper-slide">';
					str +='<div class="cat-thumb">';
                    var img_str_json=JSON.stringify(data[i].images[0]).replace(/"/g, '');					
       	    		str +='<img src='+img_str_json+' alt="" data-plugin-slide-caption="'+data[i].name+'" onclick="javascript:showshopdetail(\''+data[i].itemcode+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+data[i].size+'\',\''+data[i].description+'\',\''+data[i].id+'\',\''+data[i].keyingredients+'\',\''+data[i].howtouse+'\',\''+data[i].moreinfo+'\',\''+data[i].gender+'\',\''+data[i].organic+'\',\''+data[i].fragrance+'\',\''+data[i].alchohol+'\',\''+i+'\',\''+img_str_json+'\');"/>';
					str +='<h4>'+data[i].name+'</h4>';
					str +='</div>';
					str +='</div>';
				
					//str1 +='<li><a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\');">'+data[i].name+'</a></li>';
					
				}

				document.getElementById("similar_slider").innerHTML=str;
               
				setTimeout(function(){
				$("#similar_slider").not('.slick-initialized').slick({
					dots: false,
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 4000,
					arrows:true
				  }); 
				}, 100);
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });*/
	$.mobile.changePage( "#shop-detail");

}

function showshopdetail2(code,name,mrp,size,desc,id,key,howtouse,more,gender,organic,fragrance,alchohol,i,imgstr,gst,sitem,scombine,is_sale,is_featured,is_toprated,is_new,avg_rating)
{


}

function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

function gobacktoproduct()
{
	showProducts(globalcid,globalcname,globalgst,globalcattype);

}
function movetoshop(code,id,name,mrp,index,qtytxt,size,imglink,gst)
{
    buyfromshop(code,id,name,mrp,index,qtytxt,size,imglink,gst);
    remfromwish(code,id,name,mrp,index,qtytxt,size,imglink,gst,'product');
    
}
function addons(code,id,name,mrp,index,qtytxt,size,imglink,gst,sitem,scombine)
{
	var selvar;
    try{
	selvar = $('#variable'+code).val();
    if(typeof selvar ==undefined)
    {
     selvar = $('#variabledet'+code).val();   
    }
    //console.log(selvar);
	}catch(err)
	{

	}
    var selarr = selvar.split('$');

	$.ajax({
		 url: shopcmsurl+'getcat/getaddonsgroupitems/'+code+'/'+selarr[0]+'/mobile',
	     //url: shopcmsurl+'getcat/getitemsbysubcat/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			//console.log('VariationsData:'+JSON.stringify(data));
			$("#addonpop").popup();
			
			
			var str = '';
			str +='<div class="shop-thumb1">';
            str +='<div class="description">';
			str +='<h3 class="product_name">'+name+'</h3>';
            str +='<h2 class="price">&#2547; '+selarr[1]+'</h2>';
            str +='</div></div>';
			str +='<h2 class="price"><span id="addonprice"></span></h2>';
			//code,id,name,mrp,index,qtytxt,size,imglink,gst,sitem,scombine
			str +='<button onclick="javascript:buyfromshop1(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\''+qtytxt+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\');" class="add_to_cart" data-role="none">+</button>';		
			str += '<ul>';
			for(var i=0;i<data.length;i++)
			{
				/*console.log('eee'+data[i].addongroup.addongroup_name);
				for(var j=0;j<data[i].addongroup.addonitems.length;j++)
				{
				console.log('fff'+data[i].addongroup.addonitems[j].addonitem_name);	
				}*/
				str +='<li><a href="#">'+data[i].addongroup.addongroup_name+'(Select upto '+data[i].addon_item_selection_max+' item/items)</a>';
                str +='<ul class="radio_options">';
                for(var j=0;j<data[i].addongroup.addonitems.length;j++)
				{
                str +='<li><label> <input type="checkbox" name="addon'+data[i].addongroup.addongroupid+'" id="addon'+data[i].addongroup.addonitems[j].addonitemid+'" data-role="none" onchange="javascript:checkitemsel(\''+data[i].addon_item_selection_max+'\',\''+data[i].addongroup.addongroupid+'\',\''+code+'\',\''+data[i].addongroup.addonitems[j].addonitemid+'\',\''+data[i].addongroup.addonitems[j].addonitem_name+'\',\''+data[i].addongroup.addonitems[j].addonitem_price+'\',\''+selarr[1]+'\')">'+data[i].addongroup.addonitems[j].addonitem_name+'- &#2547;  '+data[i].addongroup.addonitems[j].addonitem_price+'</label></li>';
            	}
                str +='</ul>';
                str +='</li>';
			}
			str += '</ul>';

			
			//console.log('customisediv str....'+str);
			document.getElementById("customisediv").innerHTML=str;
			$("#addonpop").popup("open"); 
				},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
    

   
}
function buyfromshop1(code,id,name,mrp,index,qtytxt,size,imglink,gst)
{
	$("#addonpop").popup("open");
	buyfromshop(code,id,name,mrp,index,qtytxt,size,imglink,gst);
}
function checkitemsel(maxAllowed,groupid,itemcode,itemid,itemname,itemprice,prodprice)
{
	//alert('maxitems'+maxitems+'..............groupid'+groupid);
	var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
	var segmentprice=prodprice;
	var segmentnames='';
	 $("input[name='addon"+groupid+"']").change(function () {
      var cnt = $("input[name='addon"+groupid+"']:checked").length;
      if (cnt > maxAllowed) 
      {
         $(this).prop("checked", "");
         alert('No more items can be chosen');
     }
     
            
  });
	  $("input[name='addon"+groupid+"']:checked").each( function () {
         	/*for(var j=0;j<myaddonlist.size;j++)
         	{
         		var tmpobj = myaddonlist[j];
         	    if(tmpobj.indexOf(itemcode+'|'+groupid)>=0)
				{
				myaddonlist.splice(j, 1);
				}
			}*/
        if(myaddonlist.indexOf(itemcode+'|'+groupid+'|'+itemid+'|'+itemname+'@'+itemprice)==-1)
        {
        	//alert('segmentprice'+segmentprice+'....itemprice..'+itemprice);
   			myaddonlist.push(itemcode+'|'+groupid+'|'+itemid+'|'+itemname+'@'+itemprice);
   			segmentprice = parseInt(segmentprice) + parseInt(itemprice);
   			segmentnames = segmentnames + itemname + ',';
   			//alert(segmentnames);
        }
        //alert('segmentnames..'+segmentnames+'...segmentprice............'+segmentprice);
        //alert('myaddonlist..'+JSON.stringify(myaddonlist));
        localStorage.setItem("addoncartsmarket",JSON.stringify(myaddonlist));
        //document.getElementById("addonprice").innerHTML=document.getElementById("addonprice").outerHTML+ segmentnames+ ':' +segmentprice;
   		
   });
}

function buyfromshop(e,code,id,name,mrp,index,qtytxt,size,imglink,gst,cid)
{



var q =0;
try
{
e.parentNode.querySelector('input[type=number]').stepUp();

if(e.parentNode.querySelector('input[type=number]').value == 1){
e.parentNode.querySelector('.add_btn').style.display= 'none';
}

q = e.parentNode.querySelector('input[type=number]').value
}
catch(e)
{

q=1;

}



//console.log('from qtytxt:'+q);
var stocknotavail = false;
if(typeof q !='undefined')
{
try{
$('#qty'+code+'').val(q);
$('#qtydet'+code+'').val(q);
}catch(err){}
var amt=parseInt(mrp)*parseInt(q);
if(typeof gst !='undefined')
{
amt = amt + amt*gst/100;
}
var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"));
//alert('addonlist'+myaddonlist);
var selvar='';
try{
selvar = $('#variable'+code).val();
if(typeof selvar ==undefined)
{
selvar = $('#variabledet'+code).val();
}
//alert(selvar);
var addonstr = '';
var tmpprice = 0;
//alert('2222');
for(var j=0;j<myaddonlist.length;j++)
{
var tmpobj = myaddonlist[j].split('|');
//alert('tmpobj'+tmpobj);
if(tmpobj[0]==code)
{
if(addonstr!='')
addonstr = addonstr + '$' +tmpobj[3];
else
addonstr = tmpobj[3];

var items = tmpobj[3].split('@');

tmpprice = parseInt(tmpprice) + parseInt(items[1]);
//alert('addonstr inside...'+addonstr);
//alert('tmpprice inside...'+tmpprice);
}
//alert('addonstr...'+addonstr);
//alert('tmpprice...'+tmpprice);
}
try{
var varprod = selvar.split('-');
}
catch(r)
{

}
mrp = parseInt(varprod[1]) + parseInt(tmpprice);
//mrp = varprod[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;

//alert('3333');
/*var selarr = selvar.split('$');

for(var s=0;s<selarr.length;s++){
console.log('selarr..................'+selarr[s]);
if(selarr[s].indexOf('stock-')>=0)
{
var stock = selarr[s].split('-');
//alert('stock....'+stock[1]);
if(parseInt(stock[1])==0 || (parseInt(stock[1]) < parseInt(q)))
{
document.getElementById('outofstock'+code).innerHTML = 'Out of Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Out of Stock';
stocknotavail = true;
}
else if(parseInt(stock[1])<=10)
{
document.getElementById('outofstock'+code).innerHTML = 'Limited Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Limited Stock';
}
else
{
document.getElementById('outofstock'+code).innerHTML = '';
document.getElementById('outofstockdet'+code).innerHTML = '';
}
}
else if(selarr[s].indexOf('mrp-')>=0)
{
var price = selarr[s].split('-');
console.log('222'+price);
mrp = price[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
}
}*/
//console.log('selvar'+selvar);
}catch(err)
{
//alert('3333'+err.toString());
}

if(stocknotavail==false)
{
toast('Item added to cart');
$("#viewCart").animate({height: "initial"}, 300);

if(mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid)==-1)
{
mylist.push(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid);


}
localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
//console.log('in buyfromshop'+JSON.stringify(mylist));
var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
if(mycartlist.indexOf(code)==-1)
mycartlist.push(code);
localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
var pstr ='';
var pdetstr ='';

if(mycartlist.indexOf(code)>=0)
	{

	console.log('111:'+code);
		var j = mycartlist.indexOf(code);
	    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	    var elem = mylist[j].split('|'); 	
		pstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qty'+code+'" id="qty'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qtydet'+code+'" id="qtydet'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
	}
else
	{
		pstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';		
	}
$('#menu_pro'+code+'').html(pstr);
$('#menu_prodet'+code+'').html(pdetstr);

//var items = mylist.length;

var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}

//items = parseInt(items)+parseInt(q);
//console.log('items'+items);
//$('#noofitems_prod').text(items);
//$('#noofitems_prod1').text(items);
$('#noofitems_main').text(items);
$('#noofitems_cart').text(items);
$('#noofitems_cart1').text(items);
//$('#noofitems_prod_detail').text(items);
$.mobile.changePage( "#homepage");



showcartPopup();

}
}

}

function buyfromshop_wish(e,code,id,name,mrp,index,qtytxt,size,imglink,gst,cid)
{



var q =0;
try
{
e.parentNode.querySelector('input[type=number]').stepUp();

if(e.parentNode.querySelector('input[type=number]').value == 1){
e.parentNode.querySelector('.add_btn').style.display= 'none';
}

q = e.parentNode.querySelector('input[type=number]').value
}
catch(e)
{

q=1;

}



//console.log('from qtytxt:'+q);
var stocknotavail = false;
if(typeof q !='undefined')
{
try{
$('#qty'+code+'').val(q);
$('#qtydet'+code+'').val(q);
}catch(err){}
var amt=parseInt(mrp)*parseInt(q);
if(typeof gst !='undefined')
{
amt = amt + amt*gst/100;
}
var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"));
//alert('addonlist'+myaddonlist);
var selvar='';
try{
selvar = $('#variable'+code).val();
if(typeof selvar ==undefined)
{
selvar = $('#variabledet'+code).val();
}
//alert(selvar);
var addonstr = '';
var tmpprice = 0;
//alert('2222');
for(var j=0;j<myaddonlist.length;j++)
{
var tmpobj = myaddonlist[j].split('|');
//alert('tmpobj'+tmpobj);
if(tmpobj[0]==code)
{
if(addonstr!='')
addonstr = addonstr + '$' +tmpobj[3];
else
addonstr = tmpobj[3];

var items = tmpobj[3].split('@');

tmpprice = parseInt(tmpprice) + parseInt(items[1]);
//alert('addonstr inside...'+addonstr);
//alert('tmpprice inside...'+tmpprice);
}
//alert('addonstr...'+addonstr);
//alert('tmpprice...'+tmpprice);
}
try{
var varprod = selvar.split('-');
}
catch(r)
{

}
mrp = parseInt(varprod[1]) + parseInt(tmpprice);
//mrp = varprod[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;

//alert('3333');
/*var selarr = selvar.split('$');

for(var s=0;s<selarr.length;s++){
console.log('selarr..................'+selarr[s]);
if(selarr[s].indexOf('stock-')>=0)
{
var stock = selarr[s].split('-');
//alert('stock....'+stock[1]);
if(parseInt(stock[1])==0 || (parseInt(stock[1]) < parseInt(q)))
{
document.getElementById('outofstock'+code).innerHTML = 'Out of Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Out of Stock';
stocknotavail = true;
}
else if(parseInt(stock[1])<=10)
{
document.getElementById('outofstock'+code).innerHTML = 'Limited Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Limited Stock';
}
else
{
document.getElementById('outofstock'+code).innerHTML = '';
document.getElementById('outofstockdet'+code).innerHTML = '';
}
}
else if(selarr[s].indexOf('mrp-')>=0)
{
var price = selarr[s].split('-');
console.log('222'+price);
mrp = price[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
}
}*/
//console.log('selvar'+selvar);
}catch(err)
{
//alert('3333'+err.toString());
}

if(stocknotavail==false)
{
toast('Item added to cart');
$("#viewCart").animate({height: "initial"}, 300);

if(mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid)==-1)
{
mylist.push(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid);


}
localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
//console.log('in buyfromshop'+JSON.stringify(mylist));
var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
if(mycartlist.indexOf(code)==-1)
mycartlist.push(code);
localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
var pstr ='';
var pdetstr ='';

if(mycartlist.indexOf(code)>=0)
	{

	console.log('111:'+code);
		var j = mycartlist.indexOf(code);
	    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	    var elem = mylist[j].split('|'); 	
		pstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qty'+code+'" id="qty'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qtydet'+code+'" id="qtydet'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
	}
else
	{
		pstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qty'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';		
	}
$('#menu_pro'+code+'').html(pstr);
$('#menu_prodet'+code+'').html(pdetstr);

//var items = mylist.length;

var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}

//items = parseInt(items)+parseInt(q);
//console.log('items'+items);
//$('#noofitems_prod').text(items);
//$('#noofitems_prod1').text(items);
$('#noofitems_main').text(items);
$('#noofitems_cart').text(items);
$('#noofitems_cart1').text(items);
//$('#noofitems_prod_detail').text(items);
//$.mobile.changePage( "#homepage");

viewcart();



//showcartPopup();

}
}

}

function showcartPopup()
{

var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];


var str = '';
var total_amt=0;
var id_str=''
var totaltax=0;
var deliverycharge=0;
var discount=0;

if(mylist.length>0)
{
for(var i=0;i<mylist.length;i++)
	{
					//alert(mylist[i]);
					var elem = mylist[i].split('|');
					
                    var tax = 0;
					console.log('elem[7]:'+elem[7])
                    if(typeof elem[7] != 'undefined' && elem[7] != 'null' && elem[7] != null && elem[7] != 'undefined')
                    {

                     tax = (elem[3]*elem[4])*elem[7]/100;
                     //total_amt=total_amt+tax;  
                     totaltax = totaltax + tax; 

                    }
					var imgurl= elem[0];
					var imgurlmain= imgurl.trim();

					try{
					if(elem[9].indexOf('$')>=0)
					elem[9] = elem[9].replace('$','|');
					}catch(err){}
					var varprod = elem[8].split('-');
					//alert('elem[9]'+elem[9]);
					if(elem[9]=='')
					{
					id_str=id_str+elem[2]+ '-'+ elem[5]+ '-'+ elem[4]+ '-'+ elem[3]+ '-'+ tax+ '-'+ elem[0]+ '-'+ elem[9]+',';
					total_amt=total_amt+elem[3]*elem[4];
					//alert('1111111'+id_str);
					}
					else
					{	
					id_str=id_str+elem[2]+ '-'+ elem[5]+ '-'+ elem[4]+ '-'+ varprod[1]+ '-'+ tax+ '-'+ elem[0]+ '-'+ elem[9]+',';
					total_amt=total_amt+elem[3]*elem[4];
					//alert('varprod[1]'+varprod[1]);
					//alert('2222222'+id_str);
					}
               
                
	}	


					
	var famt = parseFloat(total_amt)+parseFloat(totaltax)+parseFloat(deliverycharge)-parseFloat(discount);
	
    
}

		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}

	var str='';
	str+='<div class="cust_footer">';
	str+='<div class="cart_foo">';
	str+='<p>'+items+' Item</p>';
	str+='<h1>BDT '+total_amt+'</h1>';
	str+='<p>Plus Taxes</p>';
	str+='</div>';
	str+='<button class="custo_btn" onClick="viewcart()">View Cart</button>';
	str+='</div>';

  // $.mobile.changePage( "#homepage");
    

    document.getElementById("viewCart").innerHTML=str;

	  if(items!=parseInt(0) && total_amt!=parseInt(0))
	  {
		$(".overlay").fadeOut(300);
		$("#viewCart").slideDown("fast");
	  }
	  else
	  {
		 $(".overlay").fadeOut(300);
		 $("#viewCart").slideUp("fast");
	  }
}

function buyfromshop2(e,code,id,name,mrp,index,qtytxt,size,imglink,gst,cid)
{



var q =0;
try
{
e.parentNode.querySelector('input[type=number]').stepUp();

if(e.parentNode.querySelector('input[type=number]').value == 1){
e.parentNode.querySelector('.add_btn').style.display= 'none';
}

q = e.parentNode.querySelector('input[type=number]').value
}
catch(e)
{

q=1;

}



//console.log('from qtytxt:'+q);
var stocknotavail = false;
if(typeof q !='undefined')
{
try{
$('#qty'+code+'').val(q);
$('#qtydet'+code+'').val(q);
}catch(err){}
var amt=parseInt(mrp)*parseInt(q);
if(typeof gst !='undefined')
{
amt = amt + amt*gst/100;
}
var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"));
//alert('addonlist'+myaddonlist);
var selvar='';
try{
selvar = $('#variable'+code).val();
if(typeof selvar ==undefined)
{
selvar = $('#variabledet'+code).val();
}
//alert(selvar);
var addonstr = '';
var tmpprice = 0;
//alert('2222');
for(var j=0;j<myaddonlist.length;j++)
{
var tmpobj = myaddonlist[j].split('|');
//alert('tmpobj'+tmpobj);
if(tmpobj[0]==code)
{
if(addonstr!='')
addonstr = addonstr + '$' +tmpobj[3];
else
addonstr = tmpobj[3];

var items = tmpobj[3].split('@');

tmpprice = parseInt(tmpprice) + parseInt(items[1]);
//alert('addonstr inside...'+addonstr);
//alert('tmpprice inside...'+tmpprice);
}
//alert('addonstr...'+addonstr);
//alert('tmpprice...'+tmpprice);
}
try{
var varprod = selvar.split('-');
}
catch(r)
{

}
mrp = parseInt(varprod[1]) + parseInt(tmpprice);
//mrp = varprod[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;

//alert('3333');
/*var selarr = selvar.split('$');

for(var s=0;s<selarr.length;s++){
console.log('selarr..................'+selarr[s]);
if(selarr[s].indexOf('stock-')>=0)
{
var stock = selarr[s].split('-');
//alert('stock....'+stock[1]);
if(parseInt(stock[1])==0 || (parseInt(stock[1]) < parseInt(q)))
{
document.getElementById('outofstock'+code).innerHTML = 'Out of Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Out of Stock';
stocknotavail = true;
}
else if(parseInt(stock[1])<=10)
{
document.getElementById('outofstock'+code).innerHTML = 'Limited Stock';
document.getElementById('outofstockdet'+code).innerHTML = 'Limited Stock';
}
else
{
document.getElementById('outofstock'+code).innerHTML = '';
document.getElementById('outofstockdet'+code).innerHTML = '';
}
}
else if(selarr[s].indexOf('mrp-')>=0)
{
var price = selarr[s].split('-');
console.log('222'+price);
mrp = price[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
}
}*/
//console.log('selvar'+selvar);
}catch(err)
{
//alert('3333'+err.toString());
}

if(stocknotavail==false)
{
toast('Item added to cart');
$("#viewCart").animate({height: "100px"}, 300)

if(mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid)==-1)
{
mylist.push(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+selvar+'|'+addonstr+'|'+cid);

//alert(JSON.stringify(mylist));
/*var temporder = localStorage.getItem('temporderid');
if(typeof temporder == undefined || temporder == null)
temporder='';
if(temporder=='')
{
$.ajax({
url: shopcms+'apis/add/cartlist/'+brand_id, //login.php
type: 'GET',
timeout: 50000,
dataType: 'json', //xml/html/script/json/jsonp
data: {'mobile': user.mobile, 'code': code, 'id': id, 'name': name, 'mrp': mrp, 'qty': q, 'size': size},
complete: function(xhr, textStatus) {
//called when complete
},
success: function(data, textStatus, xhr) {
//alert('JSONDATA'+JSON.stringify(data));
var temporderid=data.order_id;
//alert(temporderid);
localStorage.setItem('temporderid',temporderid);
},
error: function(xhr, textStatus, errorThrown) {

toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
}
});
}
else
{
$.ajax({
url: shopcms+'apis/add/cartlist/'+brand_id, //login.php
type: 'GET',
timeout: 50000,
dataType: 'json', //xml/html/script/json/jsonp
data: {'mobile': user.mobile, 'code': code, 'id': id, 'name': name, 'mrp': mrp, 'qty': q, 'size': size, 'order_id': temporder},
complete: function(xhr, textStatus) {
//called when complete
},
success: function(data, textStatus, xhr) {
//console.log('JSONDATA'+JSON.stringify(data));
var temporderid=data.order_id;
localStorage.setItem('temporderid',temporderid);
},
error: function(xhr, textStatus, errorThrown) {

toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
}
});
}*/

}
localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
//console.log('in buyfromshop'+JSON.stringify(mylist));
var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
if(mycartlist.indexOf(code)==-1)
mycartlist.push(code);
localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
var pstr ='';
var pdetstr ='';

if(mycartlist.indexOf(code)>=0)
	{

	console.log('111:'+code);
		var j = mycartlist.indexOf(code);
	    mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	    var elem = mylist[j].split('|'); 	
		pstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart2(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qtycartreco'+code+'" id="qtycartreco'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart2(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button  onclick="javascript:updateshopcart2(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\'sub\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
				'<input name="qtydet'+code+'" id="qtydet'+code+'" class="quantity" min="0" name="quantity" value="1" type="number" data-role="none">'+
				'<button onclick="javascript:updateshopcart2(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\'add\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
				'</div>';
	}
else
	{
		pstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';
		pdetstr += '<div class="cart_qty">'+	
				'<button onclick="buyfromshop(this,\''+itemcode+'\',\''+id+'\',\''+itemname+'\',\''+mrp+'\',\''+index+'\',\'qtycartreco'+code+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button>'+
				'</div>';		
	}
$('#menu_pro'+code+'').html(pstr);
$('#menu_prodet'+code+'').html(pdetstr);

//var items = mylist.length;

var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}

//items = parseInt(items)+parseInt(q);
//console.log('items'+items);
//$('#noofitems_prod').text(items);
//$('#noofitems_prod1').text(items);
$('#noofitems_main').text(items);
$('#noofitems_cart').text(items);
$('#noofitems_cart1').text(items);
//$('#noofitems_prod_detail').text(items);
//$.mobile.changePage( "#homepage");



viewcart();

}
}

}

function addtowish(code,id,name,mrp,index,qtytxt,size,imglink,gst,catid)
{	

    if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#login", { transition: "none"} ); 
	}
	else
	{

	
	//document.getElementById("imgwish"+id).src = 'images/wishlist_icon_active.png';

	document.getElementById("wishlist_div").innerHTML='<label class="wishlist_btn"><img src="assets/images/wishlist_icon_active.png" id="" class="wishlist_btn2" onclick="javascript:remfromwish2(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\''+qtytxt+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+catid+'\');" /></label>';
	
	
	toast1(name + ' added to wishlist');
	
	var q =  '1';
	/*var q =  $('#'+qtytxt+'').val();
	//console.log("here q"+q);
	if(typeof q !='undefined')
	{
	var amt=parseInt(mrp)*parseInt(q);
	if(typeof gst !='undefined')
    {
	amt = amt + amt*gst/100;
    }*/
	var mylist = JSON.parse(localStorage.getItem("mywishlistsmarket"))||[];
	
	//alert(JSON.stringify(mylist));
   if(mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid)==-1)
   {
		mylist.push(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid);
   
   }
  
   
	localStorage.setItem("mywishlistsmarket",JSON.stringify(mylist));
	
	var mylist_item = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	
	//alert(JSON.stringify(mylist));
   if(mylist_item.indexOf(name)==-1)
   {
		mylist_item.push(name);
        
   }
	localStorage.setItem("mywishlistitemsmarket",JSON.stringify(mylist_item));
	/*try{
		var mycartlist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		if(mycartlist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid)>=0)
			{
				remfromshop(code,id,name,mrp,index,qtytxt,size,imglink,gst,catid);
			}
	}
	catch(err){}
	
	}*/

	/*var items = $('#noofitems_wish').text();
    items = parseInt(items)+parseInt(q);
	//console.log(items);

    $('#noofitems_wish1').text(items);
	$('#noofitems_wish2').text(items);
	$('#noofitems_wish').text(items);
	$('#noofitems_wish_detail').text(items);
    showProducts(globalcid,globalcname,globalgst,globalcattype); */ 

	}

//}
}


function viewwishlist()
{

var mylist = JSON.parse(localStorage.getItem("mywishlistsmarket"))||[];
var str = '';
var total_amt=0;
var id_str=''
if(mylist.length>0)
{

	var str = '<div class="menu_content"><ul>';

	for(var i=0;i<mylist.length;i++)
	{

					var elem = mylist[i].split('|');
					total_amt=total_amt+(elem[3]*elem[4]);
                    var tax = 0;
                    if(typeof elem[7] != 'undefined')
                    {
                     tax = (elem[3]*elem[4])*elem[7]/100;
                     total_amt=total_amt+tax;   
                    }
					var imgurl= elem[6];
					var imgurlmain= imgurl.trim();

					var psizetext=elem[5];
					if(psizetext=='null' || psizetext==null )
					{
						psizetext='';
					}
					else
					{
						psizetext='-'+psizetext;
					}


					


							str +='<li><div class="dish_img"><img src="'+imgurlmain+'" class="img-responsive" alt="" onerror="javascript:onImgError(this);">'+
							'</div><div class="dis_desc"><h3>'+elem[2]+'<span class="meal_type"></span></h3>'+
							'<div class="ui-grid-a"><div class="ui-block-a"><div class="dish_price">&#2547; '+elem[3]+'</div></div>'+
							'<div class="ui-block-b"><div class="menu_add_option" id="menu_pro1">'+
							'<div class="cart_qty"><button onclick="javascript:movetoshop(this,\''+elem[0]+'\',\''+elem[1]+'\',\''+elem[2]+'\',\''+elem[3]+'\',\''+i+'\',\'qtywish'+elem[1]+'\',\''+elem[5]+'\',\''+elem[6]+'\',\''+elem[7]+'\',\''+elem[8]+'\');" class="add_btn">Move to Cart</button></div>'+
							'<div class="cart_qty"><button onclick="javascript:remfromwish(\''+elem[0]+'\',\''+elem[1]+'\',\''+elem[2]+'\',\''+elem[3]+'\',\''+i+'\',\'qtywish'+elem[1]+'\',\''+elem[5]+'\',\''+elem[6]+'\',\''+elem[7]+'\',\''+elem[8]+'\');" class="add_btn">Remove</button></div>'+
							'</div></div></li>';
                
                
	}

	str +='</ul></div>';
	
	}
else
{
	str+='<div class="emptycart"><img style="max-width: 60px;" src="assets/images/wishlist_icon1.png"> </div>';
	str+='<div class="emptycart" >No Items in your Wishlist </div>';
	str+='<div class="emptycart" style="color: #848181;font-size: 14px;> Looks like you have not added any items yet. </div>';
	
}	
	
document.getElementById("wish_details").innerHTML=str;
//document.getElementById("cart_header").innerHTML="My Cart";
$.mobile.changePage( "#wish");	
	
	

}

function movetoshop(e,code,id,name,mrp,index,qtytxt,size,imglink,gst,cid)
{
    buyfromshop_wish(e,code,id,name,mrp,index,qtytxt,size,imglink,gst,cid);
    remfromwish2(code,id,name,mrp,index,qtytxt,size,imglink,gst,cid);
    
}

function remdisc()
{
    var dis='0';
	localStorage.setItem('discountsmarket',dis);
	payamt = localStorage.getItem('totalamtsmarket')+localStorage.getItem('taxsmarket')+localStorage.getItem('deliverychargesmarket');
	localStorage.setItem('payableamt',payamt);
	$('#disdiv').html=' &#2547; '+roundoff(dis);
	$('#cartdiv').html=' &#2547; '+roundoff(payamt);
	$('#discountapplydiv').html('<div class="col-sm-5 hidden-xs" style="padding:0 10px">Promo code :</div><div class="col-sm-7 text-right promo_section" style="padding:0 10px"><input type="text" id="ccode" name="ccode" class="promo_input" placeholder="Promo Code" value="" data-role="none"  /><a href="javascript:getdiscount();" data-inline="true" class="apply_btn ui-link">Apply</a></div>');
	//viewcart();
}

function getdiscount()
{
	toast('No Promo codes available now');
}
function getdiscount2()
{
	//toast('No Promo codes available now');
	var cpnval = $('#ccode').val();
	var payamt = localStorage.getItem('payableamtsmarket');
	
	if(cpnval == 'CK10')
	{
	//alert(checkcouponvalidity(cpnval));
	
	toast('10% discount applied succesfully');
	var dis = 0.10 * parseFloat(payamt);
	localStorage.setItem('discountsmarket',dis);
	payamt = parseFloat(payamt)-parseFloat(dis);
	localStorage.setItem('payableamtsmarket',payamt);	

	$('#disdiv').html=' &#2547; '+roundoff(dis);
	$('#cartdiv').html=' &#2547; '+roundoff(payamt);
	localStorage.setItem('couponcodesmarket',cpnval);
	$('#discountapplydiv').html('Coupon Applied Successfully <button onclick="javascript:remdisc();" class="remove_cart" data-role="none">X</button>');
	//alert($('#discountapplydiv').outerHtml());
	
	}
	else if(cpnval == 'CK100')
	{
	
	checkcouponvalidity(cpnval);
	toast('Congratulations! Rs 100 off on your next purchase');
	localStorage.setItem('couponcodesmarket',cpnval);
	$('#discountapplydiv').html('Coupon Applied Successfully <button onclick="javascript:remdisc();" class="remove_cart" data-role="none">X</button>');
	
	
	}
	else
	{
	toast('Not a valid Promo code');
	var dis='0';
	localStorage.setItem('discountsmarket',dis);
	payamt = localStorage.getItem('totalamtsmarket')+localStorage.getItem('taxsmarket')+localStorage.getItem('deliverychargesmarket');
	localStorage.setItem('payableamt',payamt);
	localStorage.removeItem('couponcodesmarket');
	$('#disdiv').html=' &#2547; '+roundoff(dis);
	$('#cartdiv').html=' &#2547; '+roundoff(payamt);
	}
	viewcart();
	
}


function checkcouponvalidity(cpnval)
{
var cpnstatus= false;
  $.ajax({
    url: shopcmsurl+'getcat/checkUser/'+localStorage.getItem('userphonesmarket'), //login.php
    type: 'GET',
	dataTyoe:'json',
    timeout: 50000,
        data: {},
        complete: function(xhr, textStatus) {
    //called when complete
        },
        success: function(data, textStatus, xhr) {
       //console.log('JSONDATA'+JSON.stringify(data));
		if(data=='User already exists!')
			{
			cpnstatus = false;
			return cpnstatus;
			}
		else if(data=='User is available to use coupon.')
			{
			cpnstatus = true;
			return cpnstatus;
			}
        },
        error: function(xhr, textStatus, errorThrown) {
    
            toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
        }
    });
}

function viewcart()
{

var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
resetsavedAddloc();

var str = '';
var total_amt=0;
var id_str=''
var totaltax=0;
var deliverycharge=0;
var discount=0;
var totalwt=0;

if(typeof localStorage.getItem('discountsmarket') == "undefined" || localStorage.getItem('discountsmarket') == null)
discount = 0;
else
discount = localStorage.getItem('discountsmarket');

//alert(mylist.length);
if(mylist.length>0)
{
	for(var i=0;i<mylist.length;i++)
	{
					//alert(mylist[i]);
					var elem = mylist[i].split('|');

		if(elem[4]!='0')
		{
					
                    var tax = 0;
					console.log('elem[7]:'+elem[7])
                    if(typeof elem[7] != 'undefined' && elem[7] != 'null' && elem[7] != null && elem[7] != 'undefined')
                    {

                     tax = (elem[3]*elem[4])*elem[7]/100;
                     //total_amt=total_amt+tax;  
                     totaltax = totaltax + tax; 

                    }

					var wt = 0;
					if(typeof elem[5] != 'undefined' && elem[5] != 'null' && elem[5] != null && elem[5] != 'undefined')
                    {

                     wt = elem[4]*elem[5];
                     totalwt = totalwt + wt;

                    }

					var imgurl= elem[0];
					var imgurlmain= imgurl.trim();

					try{
					if(elem[9].indexOf('$')>=0)
					elem[9] = elem[9].replace('$','|');
					}catch(err){}
					var varprod = elem[8].split('-');

					var elem2_new =  elem[2].replace('-', '');
					
					if(elem[9]=='')
					{
						id_str=id_str+elem2_new+ '-'+ elem[5]+ '-'+ elem[4]+ '-'+ elem[3]+ '-'+ tax+ '-'+ elem[0]+ '-'+ elem[9]+',';
						total_amt=total_amt+elem[3]*elem[4];
						//alert('1111111'+id_str);
					}
					else
					{	
						id_str=id_str+elem2_new+ '-'+ elem[5]+ '-'+ elem[4]+ '-'+ varprod[1]+ '-'+ tax+ '-'+ elem[0]+ '-'+ elem[9]+',';
						total_amt=total_amt+elem[3]*elem[4];
						//alert('varprod[1]'+varprod[1]);
					}
					localStorage.setItem("id_strsmarket",id_str);

                    var psizetext=elem[5];
					if(psizetext=='null' || psizetext==null )
					{
						psizetext='';
					}
					else
					{
						psizetext='-'+psizetext;
					}
					try{
					if(elem[9].indexOf('|')>=0)
					{
					elem[9] = elem[9].replace('|',',');
					}
					elem[9] = elem[9].replace('@',' - &#2547; ');
					}catch(err){
						//alert(err.toString());
					}

					

            		str +='<div class="cart_item">'+
						'<div class="cart_item_header">'+
							'<div class="cart_item_name">'+
								'<div class="cart_item_inner">';
					if(elem[6] == 'green_dot')
						str +='<img src="assets/images/veg_sign.png" alt="" />';
					else if(elem[6]  == 'red_dot')
						str +='<img src="assets/images/non_veg_sign.png" alt="" />';
					str += elem[2]+'</div>';
					str +='<div class="cart_qty">';   				
				    str +='<button onclick="javascript:updateshopcart2(\''+elem[0]+'\',\''+elem[1]+'\',\''+elem[2]+'\',\''+elem[3]+'\',\''+i+'\',\'qtycart'+elem[0]+'\',\''+elem[5]+'\',\'sub\',\''+elem[6]+'\',\''+elem[7]+'\',\''+elem[8]+'\');" data-role="none" class="spinner_button">-</button>';
					str +='<input class="quantity" min="1" name="qtycart'+elem[0]+'" id="qtycart'+elem[0]+'" value="'+elem[4]+'" type="number" data-role="none" readonly>';
					str +='<button onclick="javascript:updateshopcart2(\''+elem[0]+'\',\''+elem[1]+'\',\''+elem[2]+'\',\''+elem[3]+'\',\''+i+'\',\'qtycart'+elem[0]+'\',\''+elem[5]+'\',\'add\',\''+elem[6]+'\',\''+elem[7]+'\',\''+elem[8]+'\');" data-role="none" class="spinner_button">+</button>';
					str +='</div>';
                    str +='<div class="cart_del" onclick="javascript:remfromshop(\''+elem[0]+'\',\''+elem[1]+'\',\''+elem[2]+'\',\''+elem[3]+'\',\''+i+'\',\'qtycart'+elem[0]+'\',\''+elem[5]+'\',\''+elem[6]+'\',\''+elem[7]+'\',\''+elem[8]+'\');">';
					str +='<img src="assets/images/delete_icon.png" class="img-responsive" alt="Delete Icon">';
					str +='</div>';	
					str+='<div class="cart_item_price">&#2547; '+roundoff(elem[3]*elem[4])+'</div>';
                    str +='</div>';
					str +='<div class="menu_add_option_cart colorpr">BDT '+elem[3]+'</div>';
					str +='</div>';
					str +='</div>';

					

	   }
					

                
	}	

//str +='<br><h3 class="menu_heading">Recommendations</h3><div id="p_recomenddiv"></div>';
					//str +='<div class="cart_item">';
					//str +='<input type="text" class="instructions_input" id="special_instructions" data-role="none" placeholder="Any request for the order">';
					//str +='</div>';

              
					deliverycharge='60';

                    
					/* calculating per/kg charge */

					var wt_charge=0;

					if(totalwt<=6000)
					{
						wt_charge ='0';
					}
					else if(totalwt>6000)
					{
						var ew = totalwt-6000;
						var k = ew/1000;

						if (ew % 1000 == 0)
						{
							wt_charge= 0+(k*10);
						}
						else
						{
							wt_charge= 0+parseInt(k*10);
						}
					}

					console.log('totalwt:'+totalwt);
					console.log('wt_charge:'+wt_charge);


                     deliverycharge = parseFloat(deliverycharge)+parseFloat(wt_charge);


	var famt = parseFloat(total_amt)+parseFloat(totaltax)+parseFloat(deliverycharge)-parseFloat(discount);
	
	str+='<div class="cart_check mt-10">'+
		 '<div class="cart_inner">'+
		 '<div class="inner_text">Net Amount:</div>'+
		 '<div class="inner_price">&#2547; '+roundoff(total_amt)+'</div>'+
		 '</div></div>';
	str+='<div class="cart_check">'+
		 '<div class="cart_inner">'+
		 '<div class="inner_text">Vat:</div>'+
		 '<div class="inner_price">&#2547; '+roundoff(totaltax)+'</div>'+
		 '</div></div>';
	str+='<div class="cart_check">'+
		 '<div class="cart_inner">'+
		 '<div class="inner_text">Delivery Charge:</div>'+
		 '<div class="inner_price">&#2547; '+roundoff(deliverycharge)+'</div>'+
		 '</div></div>';
	str+='<div class="cart_check">'+
		 '<div class="cart_inner">'+
		 '<div class="inner_text">Discount:</div>'+
		 '<div class="inner_price" id="disdiv">&#2547; '+roundoff(discount)+'</div>'+
		 '</div></div>';
    str+='<div class="cart_check">'+
		 '<div class="cart_inner">'+
		 '<div class="inner_text">Cart Total:</div>'+
		 '<div class="inner_price" id="cartdiv">&#2547; '+roundoff(famt)+'</div>'+
		 '</div></div>';

	
	str+='<br><div class="add_instruction">'+
								'<p>Any request for the order</p>'+
								'<a href="javascript:addInstruction()" class="edit_btn"><img src="assets/images/edit_icon.png" class="img-responsive" alt=""></a>'+
							'</div>'+
							'<div id="Instruction" style="display: none">'+
								'<div class="special_instructions">'+
									'<input type="text" id="special_instructions" placeholder="Add Special Instruction" data-role="none" class="form-control">'+
								'</div>'+
							'</div>';

	//str+='<br><div class="text-center">'+
	//'<a href="#home" data-role="none" class="btn_primary sbt_location">Add More</a>'+
						//'<a href="javascript:getpaymentmethod();" data-role="none" class="btn_primary sbt_location">Confirm Order</a>'+
					//'</div>';
    
		//str+='<br><div id="discountapplydiv">';
		//str+='<div class="col-sm-5 hidden-xs" style="padding:0 10px">Promo code :</div><div class="col-sm-7 text-right promo_section" style="padding:0 10px"><input type="text" id="ccode" name="ccode" class="promo_input" data-role="none" placeholder="Promo Code" value=""  /><a href="javascript:getdiscount();" data-inline="true" class="apply_btn ui-link">Apply</a></div>';
		//str+='</div>';
	
    

	str+='<div class="text-center mt-20 mb-20">'+
								'<a href="javascript:getpaymentmethod();" data-role="none" class="cart_btn">Continue</a>'+
							'</div>';
    
}
else
{
	str+='<div class="emptycart"><img style="max-width: 60px;" src="assets/images/thumb_img7.png"> </div>';
	str+='<div class="emptycart" >Your Cart is Empty </div>';
	str+='<div class="emptycart" style="color: #848181;font-size: 14px;> Looks like you have not added any items yet. </div>';


	//$('#paysection').css('display','none');


	hidecartPopup();
	
}
document.getElementById("cartmain").innerHTML=str;
//document.getElementById("cart_header").innerHTML="My Cart";
$.mobile.changePage( "#my_cart");	

//$(".overlay").fadeIn(300);
//$("#cart_main").slideDown("fast");

localStorage.setItem('totalamtsmarket',total_amt);
localStorage.setItem('payableamtsmarket',famt);	
localStorage.setItem('taxsmarket',totaltax);	
localStorage.setItem('deliverychargesmarket',deliverycharge);
localStorage.setItem('discountsmarket',discount);


updateDelieverysection();

//updateRecendations();
	

}


function resetsavedAddloc()
{
	localStorage.removeItem('u_name1');
	localStorage.removeItem('u_addr1');
	localStorage.removeItem('u_addr2');
	localStorage.removeItem('u_city');
	localStorage.removeItem('u_state');
	localStorage.removeItem('u_pin');


	localStorage.removeItem("selectedstoresmarket");
	localStorage.removeItem("selectedareasmarket");
	localStorage.removeItem("selectedaddresssmarket");

	localStorage.removeItem('couponcodesmarket');
}

function getpaymentmethod()
{

	if(user.mobile==null || user.mobile=='' || user.mobile=='undefined' || user.mobile=='null')
	{
		$.mobile.changePage( "#login", { transition: "none"} );
		toast('Please login to order.');
	}
	else
	{
		var address1= checkforundefined(localStorage.getItem('u_addr1'));
		//var address2= checkforundefined(localStorage.getItem('u_addr2'));
		var city= checkforundefined(localStorage.getItem('u_city'));
		var state= checkforundefined(localStorage.getItem('u_state'));
		var pcode = checkforundefined(localStorage.getItem('u_pin'));

		if(address1=='' || city=='' || state=='' || pcode=='')
		{
			 toast('Please check for delivery address');
			 //document.getElementById("p_deliverydiv").focus();
		}
		else
		{
			
			$('#paytmopt').css('background-color','#ffffff');
			$('#cashopt').css('background-color','#ffffff');
			localStorage.removeItem("paymenttypesmarket");

			setminDate();

			$.mobile.changePage( "#payment");

		}

	}
}

function roundoff(elem)
{
   elem = Math.round(parseFloat(elem) * 100) / 100;
   return elem;
}

function remfromshop(code,id,name,mrp,index,qtytxt,size,imglink,gst,variable)
{
	var q =  $('#'+qtytxt+'').val();
	var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
	
	//if(mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+variable)>=0)
	for(var i=0;i<mylist.length;i++)
	{
		//alert('inside mylist');
		//var  i = mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+variable);
		var tmpstr = mylist[i];
		if(tmpstr.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+variable)>=0)
		{
		mylist.splice(i, 1);
		localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
        toast('Item removed from cart');

        for(var j=0;j<myaddonlist.length;j++)
         	{
         		var tmpobj = myaddonlist[j].split('|');
         		//alert('tmpobj'+tmpobj);
         	    if(tmpobj[0]==code)
				{
					//alert('tmpobj inside'+tmpobj);
					myaddonlist.splice(j, 1);
					
				}
				
			}
			localStorage.setItem("addoncartsmarket",JSON.stringify(myaddonlist));
         /*$.ajax({
    url: shopcms+'apis/delete/cartlist/'+brand_id, //login.php
    type: 'GET',
    timeout: 50000,
        dataType: 'json', //xml/html/script/json/jsonp
        data: {'mobile': user.mobile, 'code': code, 'order_id':localStorage.getItem("temporderid")},
        complete: function(xhr, textStatus) {
    //called when complete
        },
        success: function(data, textStatus, xhr) {
        //console.log('JSONDATA'+JSON.stringify(data));
        if(mylist.length==0)
        {
            localStorage.setItem("temporderid","");
            localStorage.removeItem("temporderid");
        }
        },
        error: function(xhr, textStatus, errorThrown) {
    
            toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
        }
    });*/
     }
	}
	
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
	var  j = mycartlist.indexOf(code);
		mycartlist.splice(j, 1);
	localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
	
	//var items = mylist.length;

	var items=0;
	for(var i=0;i<mylist.length;i++)
	{
		var elem = mylist[i].split('|');
		items += parseInt(elem[4]);
	}

				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_prod2').text(items);
				$('#noofitems_main').text(items);
				$('#noofitems_cart').text(items);
				$('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);;
viewcart();
}

 function selOutlet()
 {
		$.mobile.changePage( "#dashboard", { transition: "none"} );
 }

function minusCart(code,id,name,mrp,qtytxt,size,imglink,gst,variable)
{
	document.getElementById(qtytxt).stepDown();
	updatecart1(code,id,name,mrp,qtytxt,size,imglink,gst,variable);
}

function plusCart(code,id,name,mrp,qtytxt,size,imglink,gst,variable)
{
	document.getElementById(qtytxt).stepUp();
	updatecart1(code,id,name,mrp,qtytxt,size,imglink,gst,variable);
}

function remfromwish(code,id,name,mrp,index,qtytxt,size,imglink,gst,catid)
{
	//var q =  $('#'+qtytxt+'').val();
  
	
    toast1(name + ' removed from wishlist');
	document.getElementById("wishlist_div").innerHTML='<label class="wishlist_btn"><img src="assets/images/wishlist_icon1.png" id="imgwish'+id+'" class="wishlist_btn2" onclick="javascript:addtowish(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\''+qtytxt+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+catid+'\');" /></label>';
    

	var q =  '1';
	var mylist = JSON.parse(localStorage.getItem("mywishlistsmarket"))||[];
	
	
	if(mylist.includes(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid))
	{
		var  i = mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid);
		mylist.splice(i, 1);
		localStorage.setItem("mywishlistsmarket",JSON.stringify(mylist));
       
	}
	
	var mylist_item = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	
	//alert(JSON.stringify(mylist));
    var j = mylist_item.indexOf(name);
		mylist_item.splice(j, 1);
	localStorage.setItem("mywishlistitemsmarket",JSON.stringify(mylist_item));


    
	
	//var mycartlist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	
	//var items = mycartlist.length;
    //items = parseInt(items)+parseInt(q);
	//console.log('items'+items);
    /*$('#noofitems_hom').text(items);
    $('#noofitems_pro').text(items);
	$('#noofitems_prodet').text(items);
	$('#noofitems_rew').text(items);
    $('#noofitems_ref').text(items);
	$('#noofitems_adref').text(items);
	$('#noofitems_loc').text(items);
	$('#noofitems_myacc').text(items);
	$('#noofitems_myrew').text(items);
	$('#noofitems_myord').text(items);
	$('#noofitems_med').text(items);
	$('#noofitems_abt').text(items);
	$('#noofitems_deal').text(items);*/

  viewwishlist();
}

function remfromwish2(code,id,name,mrp,index,qtytxt,size,imglink,gst,catid)
{
	//var q =  $('#'+qtytxt+'').val();
  
	
    toast1(name + ' removed from wishlist');
	document.getElementById("wishlist_div").innerHTML='<label class="wishlist_btn"><img src="assets/images/wishlist_icon1.png" id="imgwish'+id+'" class="wishlist_btn2" onclick="javascript:addtowish(\''+code+'\',\''+id+'\',\''+name+'\',\''+mrp+'\',\''+index+'\',\''+qtytxt+'\',\''+size+'\',\''+imglink+'\',\''+gst+'\',\''+catid+'\');" /></label>';
    

	var q =  '1';
	var mylist = JSON.parse(localStorage.getItem("mywishlistsmarket"))||[];
	
	
	if(mylist.includes(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid))
	{
		var  i = mylist.indexOf(code+'|'+id+'|'+name+'|'+mrp+'|'+q+'|'+size+'|'+imglink+'|'+gst+'|'+catid);
		mylist.splice(i, 1);
		localStorage.setItem("mywishlistsmarket",JSON.stringify(mylist));
       
	}
	
	var mylist_item = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	
	//alert(JSON.stringify(mylist));
    var j = mylist_item.indexOf(name);
		mylist_item.splice(j, 1);
	localStorage.setItem("mywishlistitemsmarket",JSON.stringify(mylist_item));


    
	
	//var mycartlist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	
	//var items = mycartlist.length;
    //items = parseInt(items)+parseInt(q);
	//console.log('items'+items);
    /*$('#noofitems_hom').text(items);
    $('#noofitems_pro').text(items);
	$('#noofitems_prodet').text(items);
	$('#noofitems_rew').text(items);
    $('#noofitems_ref').text(items);
	$('#noofitems_adref').text(items);
	$('#noofitems_loc').text(items);
	$('#noofitems_myacc').text(items);
	$('#noofitems_myrew').text(items);
	$('#noofitems_myord').text(items);
	$('#noofitems_med').text(items);
	$('#noofitems_abt').text(items);
	$('#noofitems_deal').text(items);*/

  //viewwishlist();
}

function updateshopcart(code,id,name,mrp,index,qtytxt,size,acttype,imglink,gst,cid)
{
/*e.parentNode.querySelector('input[type=number]').stepDown();

if(e.parentNode.querySelector('input[type=number]').value < 1){
e.parentNode.parentNode.querySelector('.add_btn').style.display= 'block';
}

var q = e.parentNode.querySelector('input[type=number]').value;
*/
var q = $('#'+qtytxt).val();
var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
if(typeof q !='undefined')
{
if(parseInt(q)<1)
q = 0;
if(acttype=='add')
q = parseInt(q)+1;
else if(acttype=='sub')
q = parseInt(q)-1;
else
q = parseInt(q);
if(parseInt(q)<1)
q = 0;

$('#'+qtytxt+'').val(q);
try{
$('#qty'+code+'').val(q);
$('#qtydet'+code+'').val(q);
}catch(err){}
var stocknotavail = false;
var selvar;
try{
selvar = $('#variable'+code).val();
//alert(selvar);
var addonstr = '';
var tmpprice = 0;
//alert('2222');
for(var j=0;j<myaddonlist.length;j++)
{
var tmpobj = myaddonlist[j].split('|');
//alert('tmpobj'+tmpobj);
if(tmpobj[0]==code)
{
if(addonstr!='')
addonstr = addonstr + '$' +tmpobj[3];
else
addonstr = tmpobj[3];

var items = tmpobj[3].split('@');

tmpprice = parseInt(tmpprice) + parseInt(items[1]);
//alert('addonstr inside...'+addonstr);
//alert('tmpprice inside...'+tmpprice);
}
//alert('addonstr...'+addonstr);
//alert('tmpprice...'+tmpprice);
}
var varprod = selvar.split('-');
mrp = parseInt(varprod[1]) + parseInt(tmpprice);
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
/* var selarr = selvar.split('$');
for(var s=0;s<selarr.length;s++){
if(selarr[s].indexOf('stock-')>=0)
{
var stock = selarr[s].split('-');
//alert('stock....'+stock[1]);
if(parseInt(stock[1])==0 || (parseInt(stock[1])<parseInt(q)))
{
document.getElementById('outofstock'+code).innerHTML = 'Out of Stock';
stocknotavail = true;
}
else if(parseInt(stock[1])<=10)
{
document.getElementById('outofstock'+code).innerHTML = 'Limited Stock';
}
}
else if(selarr[s].indexOf('mrp-')>=0)
{
var price = selarr[s].split('-');
mrp = price[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
}
}*/

}catch(err)
{}
//console.log('stocknotavail'+stocknotavail);
if(stocknotavail == false)
{
//console.log('selvar'+selvar);
updatecart(code,id,name,mrp,qtytxt,size,imglink,gst,selvar,cid);
toast('Item updated in cart');
}
}
}

function updatecart(code,id,name,mrp,qtytxt,size,imglink,gst,variable,cid)
{
    
 var qt =  $('#'+qtytxt+'').val();
 
 var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
 var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
 var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
 for(var i=0;i<mylist.length;i++)
	{
	 var elem = mylist[i];
     var selvar;
     var addonstr = '';
    var tmpprice = 0;
	 if(elem.indexOf(id+'|'+name+'|'+mrp)>=0)
		{
	
    try{
	selvar = $('#variable'+code).val();
    if(typeof selvar ==undefined)
    {
     selvar = $('#variabledet'+code).val();   
    }
	
    //alert('2222');
    for(var j=0;j<myaddonlist.length;j++)
         	{
         		var tmpobj = myaddonlist[j].split('|');
         		//alert('tmpobj in update'+tmpobj);
         	    if(tmpobj[0]==code)
				{
					if(addonstr!='')
						addonstr = addonstr + '$' +tmpobj[3];
					else
						addonstr = tmpobj[3];

					var items = tmpobj[3].split('@');
					
					tmpprice = parseInt(tmpprice) + parseInt(items[1]); 
					//alert('addonstr inside...'+addonstr);
				    //alert('tmpprice inside...'+tmpprice);
				}
				//alert('addonstr...'+addonstr);
				//alert('tmpprice...'+tmpprice);
			}
			var varprod = selvar.split('-');
			//mrp = varprod[1];
			mrp = parseInt(varprod[1]) + parseInt(tmpprice);
			document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
     }catch(err){}
        mylist.splice(i, 1);
        //mycartlist.splice(i, 1);
        //if(parseInt(qt)>0)
        //{
        var elems = elem.split('|');
		mylist.push(elems[0]+'|'+elems[1]+'|'+elems[2]+'|'+elems[3]+'|'+qt+'|'+elems[5]+'|'+elems[6]+'|'+elems[7]+'|'+variable+'|'+addonstr+'|'+cid);
        //mycartlist.push(elems[0]);
        //}
	    localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
	    localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));

	    
		}
	var elemitem = mycartlist[i];
	console.log(elemitem);
	if(elemitem.indexOf(code)>=0)
		{
		mycartlist.splice(i, 1);
		console.log(mycartlist);
		if(mycartlist.indexOf(code)==-1)
		mycartlist.push(code);
	    localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
	
		}
	}

	//var items = mylist.length;

	var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}


//items = parseInt(items)+parseInt(q);
//console.log('items'+items);
//$('#noofitems_prod').text(items);
//$('#noofitems_prod1').text(items);
$('#noofitems_main').text(items);
$('#noofitems_cart').text(items);
$('#noofitems_cart1').text(items);

//viewcart();
showcartPopup();

// document.getElementById('tamt').value=parseInt(price)+parseInt(document.getElementById(qty).value)*parseInt(price);
  //document.getElementById('tamt').value=parseInt(document.getElementById(qty).value)*parseInt(price);
}


function updateshopcart2(code,id,name,mrp,index,qtytxt,size,acttype,imglink,gst,cid)
{
/*e.parentNode.querySelector('input[type=number]').stepDown();

if(e.parentNode.querySelector('input[type=number]').value < 1){
e.parentNode.parentNode.querySelector('.add_btn').style.display= 'block';
}

var q = e.parentNode.querySelector('input[type=number]').value;
*/
var q = $('#'+qtytxt).val();
var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
if(typeof q !='undefined')
{
if(parseInt(q)<1)
q = 0;
if(acttype=='add')
q = parseInt(q)+1;
else if(acttype=='sub')
q = parseInt(q)-1;
else
q = parseInt(q);
if(parseInt(q)<1)
q = 0;

$('#'+qtytxt+'').val(q);
try{
$('#qty'+code+'').val(q);
$('#qtydet'+code+'').val(q);
}catch(err){}
var stocknotavail = false;
var selvar;
try{
selvar = $('#variable'+code).val();
//alert(selvar);
var addonstr = '';
var tmpprice = 0;
//alert('2222');
for(var j=0;j<myaddonlist.length;j++)
{
var tmpobj = myaddonlist[j].split('|');
//alert('tmpobj'+tmpobj);
if(tmpobj[0]==code)
{
if(addonstr!='')
addonstr = addonstr + '$' +tmpobj[3];
else
addonstr = tmpobj[3];

var items = tmpobj[3].split('@');

tmpprice = parseInt(tmpprice) + parseInt(items[1]);
//alert('addonstr inside...'+addonstr);
//alert('tmpprice inside...'+tmpprice);
}
//alert('addonstr...'+addonstr);
//alert('tmpprice...'+tmpprice);
}
var varprod = selvar.split('-');
mrp = parseInt(varprod[1]) + parseInt(tmpprice);
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
/* var selarr = selvar.split('$');
for(var s=0;s<selarr.length;s++){
if(selarr[s].indexOf('stock-')>=0)
{
var stock = selarr[s].split('-');
//alert('stock....'+stock[1]);
if(parseInt(stock[1])==0 || (parseInt(stock[1])<parseInt(q)))
{
document.getElementById('outofstock'+code).innerHTML = 'Out of Stock';
stocknotavail = true;
}
else if(parseInt(stock[1])<=10)
{
document.getElementById('outofstock'+code).innerHTML = 'Limited Stock';
}
}
else if(selarr[s].indexOf('mrp-')>=0)
{
var price = selarr[s].split('-');
mrp = price[1];
document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
}
}*/

}catch(err)
{}
//console.log('stocknotavail'+stocknotavail);
if(stocknotavail == false)
{
//console.log('selvar'+selvar);
updatecart2(code,id,name,mrp,qtytxt,size,imglink,gst,selvar,cid);
toast('Item updated in cart');
}
}
}

function updatecart2(code,id,name,mrp,qtytxt,size,imglink,gst,variable,cid)
{
    
 var qt =  $('#'+qtytxt+'').val();
 
 var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
 var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
 var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
 for(var i=0;i<mylist.length;i++)
	{
	 var elem = mylist[i];
     var selvar;
     var addonstr = '';
    var tmpprice = 0;
	 if(elem.indexOf(id+'|'+name+'|'+mrp)>=0)
		{
	
    try{
	selvar = $('#variable'+code).val();
    if(typeof selvar ==undefined)
    {
     selvar = $('#variabledet'+code).val();   
    }
	
    //alert('2222');
    for(var j=0;j<myaddonlist.length;j++)
         	{
         		var tmpobj = myaddonlist[j].split('|');
         		//alert('tmpobj in update'+tmpobj);
         	    if(tmpobj[0]==code)
				{
					if(addonstr!='')
						addonstr = addonstr + '$' +tmpobj[3];
					else
						addonstr = tmpobj[3];

					var items = tmpobj[3].split('@');
					
					tmpprice = parseInt(tmpprice) + parseInt(items[1]); 
					//alert('addonstr inside...'+addonstr);
				    //alert('tmpprice inside...'+tmpprice);
				}
				//alert('addonstr...'+addonstr);
				//alert('tmpprice...'+tmpprice);
			}
			var varprod = selvar.split('-');
			//mrp = varprod[1];
			mrp = parseInt(varprod[1]) + parseInt(tmpprice);
			document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
     }catch(err){}
        mylist.splice(i, 1);
        mycartlist.splice(i, 1);
        if(parseInt(qt)>0)
        {
        var elems = elem.split('|');
		mylist.push(elems[0]+'|'+elems[1]+'|'+elems[2]+'|'+elems[3]+'|'+qt+'|'+elems[5]+'|'+elems[6]+'|'+elems[7]+'|'+variable+'|'+addonstr+'|'+cid);
        mycartlist.push(elems[0]);
        }
	    localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));
	     localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));

	    /* $.ajax({
   url: shopcms+'apis/update/cartlist/'+brand_id, //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'mobile': user.mobile, 'code': elems[0], 'mrp': elems[3], 'qty': qt, 'size': elems[5], 'order_id': localStorage.getItem('temporderid')},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));
    var temporderid=data.order_id;
    localStorage.setItem('temporderid',temporderid);
    },
    error: function(xhr, textStatus, errorThrown) {
  
		  toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  }); */
		}
	var elemitem = mycartlist[i];
	if(elemitem.indexOf(code)>=0)
		{
		mycartlist.splice(i, 1);
		if(mycartlist.indexOf(code)==-1)
		mycartlist.push(code);
	    localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
	
		}
	}

	//var items = mylist.length;

	var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
		var items=0;
			for(var i=0;i<mylist.length;i++)
			{
				var elem = mylist[i].split('|');
				items += parseInt(elem[4]);
			}


//items = parseInt(items)+parseInt(q);
//console.log('items'+items);
//$('#noofitems_prod').text(items);
//$('#noofitems_prod1').text(items);
$('#noofitems_main').text(items);
$('#noofitems_cart').text(items);
$('#noofitems_cart1').text(items);

viewcart();
//showcartPopup();

// document.getElementById('tamt').value=parseInt(price)+parseInt(document.getElementById(qty).value)*parseInt(price);
  //document.getElementById('tamt').value=parseInt(document.getElementById(qty).value)*parseInt(price);
}

function updatecart1(code,id,name,mrp,qtytxt,size,imglink,gst,variable)
{
    
 var qt =  $('#'+qtytxt+'').val();
 console.log('qt'+qt);
 
 var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
 var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
 var myaddonlist = JSON.parse(localStorage.getItem("addoncartsmarket"))||[];
 
 for(var i=0;i<mylist.length;i++)
	{
	 var elem = mylist[i];

	 var selvar;
     var addonstr = '';
	 var tmpprice = 0;
     
	 if(elem.indexOf(code+'|'+id+'|'+name+'|'+mrp)>=0)
		{

	/*	 try{
	selvar = $('#variable'+code).val();
    if(typeof selvar ==undefined)
    {
     selvar = $('#variabledet'+code).val();   
    }
	
    //alert('2222');
    for(var j=0;j<myaddonlist.length;j++)
         	{
         		var tmpobj = myaddonlist[j].split('|');
         		//alert('tmpobj in update'+tmpobj);
         	    if(tmpobj[0]==code)
				{
					if(addonstr!='')
						addonstr = addonstr + '$' +tmpobj[3];
					else
						addonstr = tmpobj[3];

					var items = tmpobj[3].split('@');
					
					tmpprice = parseInt(tmpprice) + parseInt(items[1]); 
					//alert('addonstr inside...'+addonstr);
				    //alert('tmpprice inside...'+tmpprice);
				}
				//alert('addonstr...'+addonstr);
				//alert('tmpprice...'+tmpprice);
			}
			var varprod = selvar.split('-');
			//mrp = varprod[1];
			mrp = parseInt(varprod[1]) + parseInt(tmpprice);
			document.getElementById('priceblk'+code).innerHTML = '&#2547; '+mrp;
     }catch(err){}*/
     
        mylist.splice(i, 1);
        var elems = elem.split('|');
		mylist.push(elems[0]+'|'+elems[1]+'|'+elems[2]+'|'+elems[3]+'|'+qt+'|'+elems[5]+'|'+elems[6]+'|'+elems[7]+'|'+variable+'|'+addonstr);
        //}
       
	    localStorage.setItem("shoppingcartsmarket",JSON.stringify(mylist));

	    /* $.ajax({
   url: shopcms+'apis/update/cartlist/'+brand_id, //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'mobile': user.mobile, 'code': elems[0], 'mrp': elems[3], 'qty': qt, 'size': elems[5], 'order_id': localStorage.getItem('temporderid')},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));
    var temporderid=data.order_id;
    localStorage.setItem('temporderid',temporderid);
    },
    error: function(xhr, textStatus, errorThrown) {
  
		  toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  }); */
		}
	var elemitem = mycartlist[i];
	if(elemitem.indexOf(code)>=0)
		{
		mycartlist.splice(i, 1);
		if(mycartlist.indexOf(code)==-1)
		mycartlist.push(code);
	    localStorage.setItem("shoppingcartitemsmarket",JSON.stringify(mycartlist));
	
		}
	}

	//var items = mylist.length;

	var items=0;
	for(var i=0;i<mylist.length;i++)
	{
		var elem = mylist[i].split('|');
		items += parseInt(elem[4]);
	}

    $('#noofitems_prod').text(items);
	$('#noofitems_prod1').text(items);
    $('#noofitems_main').text(items);
	$('#noofitems_cart').text(items);
    $('#noofitems_cart1').text(items);
	$('#noofitems_prod_detail').text(items);
	$.mobile.changePage( "#my_cart");
 viewcart();
// document.getElementById('tamt').value=parseInt(price)+parseInt(document.getElementById(qty).value)*parseInt(price);
  //document.getElementById('tamt').value=parseInt(document.getElementById(qty).value)*parseInt(price);
}

function updateRecendations()
{

	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '10';

	'use strict';	
     //$('body').addClass('ui-loading');
	//document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	//$.mobile.changePage( "#products");
	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';
	var cid = '1000011007';
	var cname = 'BEVERAGES';
	var gst = '5';

	//globalcid = cid;
	//globalcname = cname;
	   $.ajax({
		 url: shopcmsurl+'getcat/getitems/'+loc+'/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {

			console.log('ProductsData:'+JSON.stringify(data));
				
			var str = '<div class="menu_content"><ul>';

			var totlength = data.length;
            console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("p_recomenddiv").innerHTML=str;
			}
			else
			{
                console.log('foodtype in products'+foodtype);
				for(var i=0;i<totlength;i++)
				{
					if(data[i].catid==cid)
					{


					var imgurl= data[i].images;
					var imgurlnew = data[i].images;
                    var img_str_json=data[i].images;

					if(imgurlnew=='null' || imgurlnew==null || imgurlnew=='' || imgurlnew=='undefined')
					{
						imgurlnew = 'assets/images/No_Image_Available.jpg';
					}

                    if(data[i].colum9 == null)
                    	data[i].colum9='';
                    if(foodtype=='VEG')
                    {
                    	
                   if(data[i].colum9=='green_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						//str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='green_dot')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty" style="pointer-events: none;">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qtycartreco'+data[i].itemcode+'" id="qtycartreco'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop2(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else if(foodtype=='NON-VEG')
                    {

                    	
                    if(data[i].colum9=='red_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						//str +='<img src="'+imgurl+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='red_dot')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty" style="pointer-events: none;">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qtycartreco'+data[i].itemcode+'" id="qtycartreco'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop2(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else
					{
						//console.log("333");
						str +='<li><div class="dish_img">';
						//str +='<img src="'+imgurl+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+cid+'\',\''+cname+'\',\''+gst+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='green_dot')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						else if(data[i].colum9=='red_dot')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty" style="pointer-events: none;">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qtycartreco'+data[i].itemcode+'" id="qtycartreco'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop2(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qtycartreco'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+gst+'\',\''+cid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
					}
				
				}
				//str +='</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				//console.log("str"+str);
				
			}
				str +='</ul></div>';


				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
                if(mylist.length>0)
				{
					document.getElementById("p_recomenddiv").innerHTML=str;
				}
				else
				{
					//donothing
				}
			}

		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });


				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);

}

function setviewcart(paytype)
{
    localStorage.setItem('paymenttypesmarket',paytype);

    if(paytype=="cash")
    {
        $('#cashopt').css('background-color','#d15385');
        $('#cashopt').css('text-shadow','none');
        $('#paytmopt').css('background-color','#ffffff');
        
    }
    else if(paytype=="paytm")
    {
        $('#paytmopt').css('background-color','#d15385');
        $('#paytmopt').css('text-shadow','none');
        $('#cashopt').css('background-color','#ffffff');
        
    }

	//checkviewcart();
}

function checkviewcart()
{

	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#login", { transition: "none"} ); 
	}
	else
	{

		var paytype = localStorage.getItem('paymenttypesmarket');

		var cdate = $('#cdate').val();
		var cslot = $('#cslot').val();

		//console.log('cdate:'+cdate);
		//console.log('cslot:'+cslot);

		if(paytype==null || paytype=='' || paytype=='undefined')
		{
			toast('Please select Mode of Payment');
		}
		else if(!cdate)
		{
			toast('Please select delivery date');
		}
		else if(cslot=='' || cslot=='undefined' || cslot=='0' || cslot=='null' || cslot==null)
		{
			toast('Please select time slot');
		}
		else
		{
			submitpayment();
		}
	}


}

function getviewcart()
{
        var paytype = localStorage.getItem('paymenttypesmarket');
		if(paytype=='paytm')
		{
			
			//payOnlineNew(localStorage.getItem("id_str"),'',document.getElementById("tamt").value,'','0','','0');

			
			localStorage.setItem('pointsredeemsmarket','0');
			$('#billing_phone').val(checkforundefined(localStorage.getItem('usernamesmarket')));
			$('#txtfirstname').val(checkforundefined(localStorage.getItem('firstname')));
			$('#txtlastname').val(checkforundefined(localStorage.getItem('lastname')));
			$('#billing_email').val(checkforundefined(localStorage.getItem('emailid')));
			$.mobile.changePage( "#paymentpage");
			
		}
		else if(paytype=='cash')
		{
			
			localStorage.setItem('pointsredeemsmarket','0');
			$('#billing_phone').val(checkforundefined(localStorage.getItem('usernamesmarket')));
			$('#txtfirstname').val(checkforundefined(localStorage.getItem('firstname')));
			$('#txtlastname').val(checkforundefined(localStorage.getItem('lastname')));
			$('#billing_email').val(checkforundefined(localStorage.getItem('emailid')));
			$.mobile.changePage( "#paymentpage");

		}
        /*else
        {
	
		    showPOPup();
    
			document.getElementById("ppay").value = localStorage.getItem("payableamtsmarket");

           
	
			document.getElementById("rvalue").value = user.balance;

			document.getElementById("storename").innerHTML = 'Online'

			$('#rform').hide();

			$('#paybt').hide();

		
	
		}*/
}

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefined_wt(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null' || str=='')
    {
        str='0';
    }
        return str;
}

function checkforundefinedslot(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='-';
    }
        return str;
}

function checkforundefined_gst(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='0';
    }
        return str;
}

function showPOPup()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();

		//redeemNow();
        


    }).css({
        'width': '270px',
        'height': '320px',
        'padding': '5px',
        'text-shadow': 'none',
		'color':'#e8282b',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': '#fff'
    });
    //create a title for the popup
    $("<p/>", {
        text: ""
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        html: '  <div class="ptsrdm" id="storename"></div>Payable Amount:<input type="text" id="ppay" name="ppay" placeholder="Payable Amount" value=""  /><div id="paybt"> <a href="javascript:payNow();" id="submit_button_redeem" data-inline="true" class="login_btn">PayNow</a></div><div id="oform"> <div class="ui-grid-solo">Points to be redeemed:<input type="number" min="1" id="rvalue" name="rvalue" placeholder="Points to be redeemed" value=""  /></div> <div style="text-align:center"> <a href="javascript:redeemValue();" id="submit_button_redeem" data-inline="true" class="redeem_btn">Redeem</a></div></div><div id=rmsg></div><div id=rform><input type="text" id="otp" name="otp" placeholder="PIN" value=""  /><div style="text-align:center" ><a href="javascript:redeemNow();" id="submit_button_redeem1" data-inline="true" class="redeem_btn">Redeem Now</a></div>'


    }).appendTo($popUp);

	  //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back",
			"class":"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right"
    }).buttonMarkup({
        inline: false,
        mini: false,
       
	    
       
    }).appendTo($popUp);



    //create a back button


    $popUp.popup('open').trigger("create");

}


function payNow()
{
	//submitpayment();
    $('#txtfirstname').val(checkforundefined(localStorage.getItem('firstname')));
    $('#txtlastname').val(checkforundefined(localStorage.getItem('lastname')));
    $('#billing_phone').val(checkforundefined(localStorage.getItem('usernamesmarket')));
    $('#billing_email').val(checkforundefined(localStorage.getItem('emailid')));
     localStorage.setItem('paymenttypesmarket','paytm');
    //$('#billing_city').val(checkforundefined(localStorage.getItem('def_city')));
    $.mobile.changePage( "#paymentpage");
	
}

function buyNow(pid,pname,pmrp,index)
{
	$("#popuppaymenttype").popup();
	$("#popuppaymenttype").popup("open"); 

	var pqty = $('#qty'+index).val();
	var tamnt = (pmrp*pqty);

	prid=[];
	prqty=[];
	prtamount=[];

	prid.push(pid);
	prqty.push(pqty);
	prtamount.push(tamnt);

}

function payOnlineNew(pid,pname,pmrp,totalprice,pointsredeemed,pricetype,index)
{

$.mobile.changePage( "#paymentpage");
  var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
  var the_width = $(window).width();
  var str1='';
  
  var item_code = prid[0];
  var qty = prqty[0];
  //console.log(item_code+','+qty);

  var purl=shopcmsurl+'checkout/checkoutnew.php?qty=1&item_code='+encodeURIComponent(pid+'-'+pname)+'&price='+pmrp+'&totprice='+totalprice+'&predeemed='+pointsredeemed+'&pricetype='+pricetype;
  
  //alert(purl);

  str1='<embed src='+purl+' width='+the_width+' height='+the_height+' /></embed>';
  $("#innerdata").html(str1);
}

function redeemValue()
{

	localStorage.setItem('totalshop0smarket','');
	localStorage.setItem('totalshop1smarket','');
	localStorage.setItem('totalshop2smarket','');
	
	var rvalue= $('#rvalue').val();

	p_redeem= rvalue;

	if(rvalue=='')
	{
		toast('Please enter points to be reedemed');
	}
	
	else
	{
		$('#rmsg').html('Please wait..');
	$.ajax({
   url: SERVER1+'APIs/burn_points_json_api.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','redeem_points': rvalue, 'mobileno': user.mobile, 'ref_bill_number': 'mApp1', 'scode': '9', 'status': '1'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));

	//showPOPup();

    if (data.error != '')
        $('#rmsg').html(data.error);
    else {
      
        var msgfromapi = data.data;

        var msgtodp = msgfromapi.substring(0, msgfromapi.indexOf('#'));

        msgotp = msgfromapi.substring(msgfromapi.indexOf('#') + 1, msgfromapi.length);


        //showPOPup();


        $('#rmsg').html(msgtodp);

    }

	 $('#oform').hide();

	 $('#rform').show();

	 $('#otp').val(msgotp);

  
    },
    error: function(xhr, textStatus, errorThrown) {
  
		  toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  
	}

 

}

function redeemNow()
{

	$('#rmsg').html('Please wait..');

	var otp = $('#otp').val();

	couponotp=otp;

	if(otp=='')
	{
		toast('Please enter PIN to be reedemed');
	}
	
	else
	{
		redeem();
  
	}

}

function redeem()
{


    $.ajax({
        url: SERVER1+'APIs/burn_points_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'redeem_points': p_redeem, 'mobileno': user.mobile, 'ref_bill_number': 'mApp1', 'scode': '9' , 'send': '1','passcode':couponotp},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));

    $('#rmsg').html(data.data);

    var payamt = parseInt($('#ppay').val()) - parseInt(p_redeem);
    
    localStorage.setItem('payableamtsmarket',payamt);
    localStorage.setItem('pointsredeemsmarket',p_redeem);
    $('#ppay').val(payamt);

    $('#rform').hide();
    $('#paybt').show();
  
    },
    error: function(xhr, textStatus, errorThrown) {
  
		  toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
}

function authenticate()
{

  var uname = $('#username').val();
  var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();
  var phno = localStorage.getItem("phno");
    

	/*localStorage.setItem('usernamesmarket',uname);
	user.mobile = uname;
	$('#update_mobile').val(uname);*/

  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number/PIN');
 }
 else if(uname.startsWith("0")== true)
 {
	toast('Please remove initial 0 from mobile number');
 }
 else{
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));

   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	$('#username').val('');
	$('#dealercodeBox1').val('');
	$('#dealercodeBox2').val('');
	$('#dealercodeBox3').val('');
	$('#dealercodeBox4').val('');
  
   localStorage.setItem('usernamesmarket',uname);
   localStorage.setItem('passwordsmarket',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   // localStorage.setItem('passworddd',pwd);

	//console.log("user.firstname"+user.firstname);
   if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
   if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
   if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
   if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
   if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	$('#update_mobile').val(uname);
	
    
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='' || user.emailid=='undefined' || user.emailid=='null' || user.emailid==null || user.emailid=='')
    {
		 $.mobile.changePage( "#sign_up", { transition: "flip"} );
    }
    else
    {
	   /* if(localStorage.getItem("profiledone_smarket")){
			//document.getElementById("profilepts").innerHTML=user.balance;
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
				//document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
				//document.getElementById("profilenm1").innerHTML='Guest';
			}else{
				//document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
				//document.getElementById("profilepts").innerHTML=user.balance+' Points';
				//document.getElementById("profilenm1").innerHTML=user.firstname;
				//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
				
			}
				showhomeShop();
				
				}
		  else
			  $.mobile.changePage( "#sign_up", { transition: "flip"} );*/
				
			showhomeShop();

    }
   }else{
		  toast('Authentication failed');
		  $.mobile.changePage( "#submit_OTP", { transition: "flip"} );
		  
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernamesmarket');
	pwd = localStorage.getItem('passwordsmarket');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    
	
   
    }
  });
 }
}

function authenticate2()
{

  var uname = $('#username2').val();
  var pwd = $('#password_myacc2').val();
  var phno = localStorage.getItem("phno");


	/*localStorage.setItem('usernamesmarket',uname);
	user.mobile = uname;
	$('#update_mobile').val(uname);*/

  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number/PIN');
 }
 else if(uname.startsWith("0")== true)
 {
		toast('Please remove initial 0 from mobile number');
 }
 else
 {
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd,'phonenos':phno},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	//console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	$('#username2').val('');
	$('#password_myacc2').val('');
  
   localStorage.setItem('usernamesmarket',uname);
   localStorage.setItem('passwordsmarket',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   // localStorage.setItem('passworddd',pwd);

	//console.log("user.firstname"+user.firstname);
   if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
   if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
   if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
   if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
   if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);

	$('#update_email').val(user.emailid);
	$('#update_mobile').val(uname);
	


  
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='' || user.emailid=='undefined' || user.emailid=='null' || user.emailid==null || user.emailid=='')
    {
		 $.mobile.changePage( "#sign_up", { transition: "flip"} );
    }
    else
    {
	   /* if(localStorage.getItem("profiledone_smarket")){
			//document.getElementById("profilepts").innerHTML=user.balance;
		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
			//document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
			//document.getElementById("profilenm1").innerHTML='Guest';
		}else{
			//document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
			//document.getElementById("profilepts").innerHTML=user.balance+' Points';
			//document.getElementById("profilenm1").innerHTML=user.firstname;
			//document.getElementById("profilepts1").innerHTML=user.balance+' Points';
			
		}
			showhomeShop();
			
			}
	  else
		  $.mobile.changePage( "#sign_up", { transition: "flip"} );*/

		  showhomeShop();
    }
   }else{
		  toast('Authentication failed');
		  $.mobile.changePage( "#login", { transition: "flip"} );

		  

		  
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernamesmarket');
	pwd = localStorage.getItem('passwordsmarket');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    
	
   
    }
  });
 }
}

$(document).on('pageshow', '#sign_up', function (event, ui) {

	showSaved_address();

});


$(document).on('pageinit', '#sign_up', function (event, ui) {

	    //console.log("in profilepage");
		
	
		$(document).on('tap', '#update_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = user.mobile;
		//var mobile =  $('#update_mobile').val();
		var email = $('#update_email').val();
		
		var mm = $('#update_mm').val();
		var dd = $('#update_dd').val();
		var yyyy =$('#update_yyyy').val();

		//var add = $('#update_address').val();
		
    if(firstname=='' || lastname=='' || email=='')
	{
		toast('Please enter mandatory fields.');
	}
	else
	{
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				localStorage.setItem("profiledone_smarket","Yes");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;


						localStorage.setItem('firstname',firstname);
						localStorage.setItem('lastname',lastname);
						localStorage.setItem('emailid',email);

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

               
				
				
				//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		//document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		//document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		/*document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';*/
		
	}
				//$.mobile.changePage( "#sel_location_new", {transition: "flip"} );
				$.mobile.changePage( "#categoriesPage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	  }
		
	});

	$(document).on('tap', '#fb_btn', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		login();
		});
	
});

$(document).on('pageinit', '#profilepage_fb', function (event, ui) {

	    //console.log("in profilepage");
	
		$(document).on('tap', '#update_button_fb', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname_fb').val();
		var lastname = $('#update_lastname_fb').val();
		var mobile = user.mobile;
		var email = $('#update_email_fb').val();
		var mm;
		var dd;
		var yyyy;
		if(user.dob!=null || user.dob !='null')
			{
		var birthday = $('#update_dob_fb1').val();
		var dob = birthday.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
			}
		else
			{
			mm = $('#update_mm1').val();
		    dd = $('#update_dd1').val();
		    yyyy =$('#update_yyyy1').val();
			}

    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+data);
				
				 
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg_fb').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						user.dob=dd+"-"+mm+"-"+yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg_fb').html('Update failed.');
				else
					$('#update_response_msg_fb').html(data);
					


				
				
				
                
				
					//showHome();
					//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
	//	document.getElementById("profilenm1").innerHTML='Guest';
	}else{
	//	document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
	//	document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		if(parseInt(user.balance)<=4500){
			document.getElementById("category_img").src="assets/images/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=10000){
			document.getElementById("category_img").src="assets/images/gold.png";
		}
		else{
			document.getElementById("category_img").src="assets/images/platinum.png";
		}
	}
                $.mobile.changePage( "#home", {transition: "flip"} );
		        
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		
	});
	if($('#update_firstname_fb').val()=='' || $('#update_firstname_fb').val()=='null' || $('#update_firstname_fb').val()==null || $('#update_firstname_fb').val()=='undefined')
	{
		        $('#update_firstname_fb').val(user.firstname);
	            $('#update_lastname_fb').val(user.lastname);
	
	            $('#update_email_fb').val(user.emailid);
				try{
				if(user.dob!=null || user.dob!='null' || user.dob==' ')
					{
					$('#updt_1').css('display','none');
	                $('#update_dob_fb1').val(user.dob);
                    $('#updt_2').css('display','block');
					}
					else
					{
					$('#updt_2').css('display','none');
	               // $('#update_dob_fb1').val(user.dob);
                    $('#updt_1').css('display','block');
					}
				}catch(err)
		        {
					txt="There was an error on this page.\n\n"; 
					txt+="Error description: " + err.message + "\n\n"; 
					alert(txt);
				}
	}
	});





$(document).on('pageinit', '#profile', function (event, ui) {

	    //console.log("in profilepage");
		
	
		$(document).on('tap', '#update_button1', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		var firstname = $('#update_firstname1').val();
		var lastname = $('#update_lastname1').val();
		var mobile = user.mobile;
		var email = $('#update_email1').val();
		var birthday = $('#update_dob1').val();
		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';
		//var devid=$('#push_reg_no').val();
		

		
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				FirstName: firstname,
				LastName: lastname,
				deviceid:reg_id,
				cname:'',
				Emailid: email,
				mobileno: mobile,
				dd: dd,
				mm: mm,
				yy: yyyy,
                deviceType:deviceType
				//subscribe: bc_hair
				
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						$('#update_response_msg1').html('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;
						//user.dob=mm+"-"+dd+"-"yyyy;

				}
				else if(data=='Failed')
					$('#update_response_msg1').html('Update failed.');
				else
					$('#update_response_msg1').html(data);
					


				//document.getElementById("profilepts").innerHTML=user.balance;
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname==''){
		document.getElementById("profilenm").innerHTML= 'Welcome Guest!';
		document.getElementById("profilenm1").innerHTML='Guest';
	}else{
		document.getElementById("profilenm").innerHTML= 'Welcome '+user.firstname+'!';
		document.getElementById("profilepts").innerHTML=user.balance+' Points';
		document.getElementById("profilenm1").innerHTML=user.firstname;
		document.getElementById("profilepts1").innerHTML=user.balance+' Points';
		if(parseInt(user.balance)<=4500){
			document.getElementById("category_img").src="assets/images/Silver_icon.png";
		}
		else if(parseInt(user.balance)<=10000){
			document.getElementById("category_img").src="assets/images/gold.png";
		}
		else{
			document.getElementById("category_img").src="assets/images/platinum.png";
		}
	}
				$.mobile.changePage( "#home", {transition: "flip"} );
               
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	});
	});


function aboutprg(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
			

			//console.log("out about");
	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
		//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
        
        $.mobile.changePage( "#mloyalpg", {transition: "flip"} );
}
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	//document.getElementById("headername").innerHTML='Messages';
	//var main = document.getElementById("cardcontent");
	//main.style.display = 'none';
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	$("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'block');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'block');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('loyalty', 'points_history_json.asp');
	}
}
function showCoupons(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	 $("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');
   
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('coupons', 'cpns_history_json.asp');
	}
}

function gotoEditprofile()
{
	if(user.mobile==null || user.mobile=='')
	{
		 $.mobile.changePage( "#login", { transition: "none"} );
		 toast('Please login to proceed');
	}
	else
	{
		$.mobile.changePage( "#sign_up", { transition: "none"} ); 
	}	 
}

function showPreviousOrders()
{
	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#login", { transition: "none"} ); 
	}
	else
	{
		$.mobile.changePage( "#my_orders", { transition: "none"} );

		var str = '';

	     $.ajax({
                url: shopcmsurl+'getcat/getallordersbymobileno/'+user.mobile,
                type: 'GET',
                dataType:'json',
                timeout: 50000,
                data: { },
                success: function (data, textStatus, xhr) {
              

                var str ='';
				    str +='<div class="repeat_section pt-20">';

                for(var i=0;i<data.length;i++)
                {
                   
					var items1 = data[i].item.split(",");

                    var item_str = '';
					for(var k=0;k<items1.length;k++)
					{
						
						 item_str = item_str + items1[k].split("-")[0]+',<br>';

					}

					item_str = item_str.replace(",<br>,","");
					
					str +='<div class="item_product reorder_item">';
					str +='<div class="item_orders">';
					str +='<div class="dis_desc" style="padding: 0px;">';
					str +='<h3 class="order_outlet_name_new">Orded ID #'+data[i].reference_no+'</h3>';
					str +='<p class="item_brief">Items</p>';
					str +='<p class="showorderitems" onClick=javascript:showorderItems(\''+data[i].reference_no+'\');>View Items</p>';
					str +='<p class="item_brief">Ordered On</p>';
					str +='<h3>'+data[i].created+'</h3>';
					str +='<p class="item_brief">Scheduled Delivery</p>';
					str +='<h3>'+checkforundefinedslot(data[i].deliverydate)+'&nbsp;&nbsp;'+checkforundefinedslot(data[i].deliverytime)+'</h3>';
					str +='<p class="item_brief">Amount</p>';
					str +='<div class="ui-grid-a">';
					str +='<div class="ui-block-a">';
					str +='<div class="dish_price">&#2547; '+data[i].amount+' </div>';
					str +='</div>';
					str +='</div>';
					str +='</div>';
					str +='</div>';
					str +='<div class="reorder_item_footer">';
					str +='<p>'+data[i].pckg_status+'</p>';
					str +='</div>';
					str +='</div>';
					

                }

				str +='</div>';

                document.getElementById("orderlist").innerHTML = str;

				//$.mobile.changePage( "#my_orders", { transition: "none"} );
				
                },
                error: function (xhr, textStatus, errorThrown) {

				//var err = eval("(" + xhr.responseText + ")");
                //alert(err.Message);

                  
                }
            });
		
	}
}

function showorderItems(refid)
{
    document.getElementById("item-details").innerHTML = '';

	$.ajax({
                url: shopcmsurl+'getcat/getorderitems/'+refid,
                type: 'GET',
                dataType:'json',
                timeout: 50000,
                data: { },
                success: function (data, textStatus, xhr) {
              

					var str ='<h3>#'+refid+'</h3>';
						str +='<table class="table-items"><tbody>';

					for(var i=0;i<data.length;i++)
					{
					   
					   str +='<tr><td><h4>'+data[i].catname+'</h4></td></tr>';
					   str +='<tr class="ordata"><td>Items: '+data[i].item_name+'</td></tr>';
					   str +='<tr class="ordata"><td>Quantity: '+data[i].qty+'</td></tr>';

					}

					str +='</tbody></table>';

					document.getElementById("item-details").innerHTML = str;

					$('#order_items_pop').popup();
					$('#order_items_pop').popup("open");
				
                },
                error: function (xhr, textStatus, errorThrown) {

				//var err = eval("(" + xhr.responseText + ")");
                //alert(err.Message);

                  
                }
            });

}

function showOrderDetails_old(){
	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
       // alert('hhhhh');
        $.mobile.changePage( "#orders", { transition: "none"} ); 
		$("#prevOrders").css('display', 'none');
		$("#orderDetails").css('display', 'block');
	
		$("#prevordersTab").css('display', 'none');
		$("#orderDetailsTab").css('display', 'block');
	    
        $.ajax({
             //   url: shopcms+'apis/orders/get_current/'+brand_id+'?mobile='+user.mobile,
                url: shopcmsurl+'getcat/get_current/'+user.mobile,
                type: 'GET',
                timeout: 50000,
                data: { },
                success: function (data, textStatus, xhr) {

				//console.log(JSON.stringify(data));
				//renderTemplate('currentorder', data);
                localStorage.setItem('currentordersmarket', data);
                $("#orderDetailsTab").html(data);
                },
                error: function (xhr, textStatus, errorThrown) {

				var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);

                  try {
				} catch (err)
				{
                    $("#orderDetailsTab").html(localStorage.getItem('currentordersmarket'));
				//renderTemplate(id, JSON.parse(localStorage.getItem('currentorder')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });
		
	}
}

function leavfeedback(itemname,itemcode,orderid,mobileno)
{
    order_itemname=itemname;
    order_itemcode=itemcode;
    order_orderid=orderid;
    order_mobileno=mobileno;
    $("#popuprate").popup("open");
    
}
function closerating()
{
    $("#popuprate").popup("close");
}

function submitrating()
{
     $.ajax({
   url: shopcmsurl+'admin/ratings/add', //login.php
    type: 'GET',
    timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {
                'uid': order_mobileno,
				'pid': order_itemcode,
				'rat': rating,
				'rev': $('#feed_suggestion1').val(),       
				'pname': order_itemname
					
			},
   
    success: function(data, textStatus, xhr) {

		//console.log('JSONDATA:'+JSON.stringify(data));

		
		$('#feed_suggestion1').val('');
		$("#b_icon1_rate").css('opacity','0.4');
		$("#b_icon2_rate").css('opacity','0.4');
		$("#b_icon3_rate").css('opacity','0.4');
		$("#b_icon4_rate").css('opacity','0.4');
		$("#b_icon5_rate").css('opacity','0.4');
		rating='0';
		document.getElementById("fdbk_text1").innerHTML='';

       

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
}
function showSpecial(){
	
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
   
	else
	{
	//document.getElementById("barcontentspecials").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	$.mobile.changePage( "#specials", { transition: "none"} );
	//document.getElementById("left-panel").panel( "close" );
	try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
	showTabContent('specials', 'specials_json.asp');
	}
	
}


function showStores(){
	
	backstore = 'home';
	//document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#stores", { transition: "none"} );
	
	showTabContent('citylist', 'city_locator_json.asp');
	
}

function getCityId(id)
{
       city_id=id;
	   backstore = 'store';
	   $.mobile.changePage( "#stores", { transition: "none"} );
	   showTabContent('centre', 'store_locator_json.asp?city='+city_id);
      
}


function showTabContent_Map(addr,ind) {
var url="http://delhidaredevilsadda.com/latlong.php";
 //console.log(url+'&addr='+addr);
	$.getJSON(
		url, {
		//page: url,
		addr : addr
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json));
	  
	    
		var lat,lng;
		try
		{
		lat=json.results[0].geometry.location.lat;
		lng=json.results[0].geometry.location.lng;	
		}
		catch (err)
		{
			lat="";
			lng="";
		}
        
		
		if(lat !="" && lng !="")
			{
			 drawMap(new google.maps.LatLng(lat, lng),ind);
			//openInWebView('http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|'+lat+','+lng+'&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
			}
			else
			{
				toast("Location could not be traced");
			}
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

   function drawMap(latlng,index) {
	   
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			//alert(index);

			var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById(index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }




function showTabContent(id, url) {
//console.log("url"+url);
var tabserver='';
if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
	{
	tabserver = "https://smarket.mloyalretail.com/Rewards/";
	}
else
	{
	
	tabserver = "https://smarket.mloyalretail.com/m/";
	}
	$.getJSON(
		tabserver+url, {
		//page: url,
		mno : user.mobile
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json));
			
		renderTemplate(id, json);
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}


function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	//console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:block;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:block;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';

        document.getElementById("POINTS").innerHTML=str; 
		
		
		break;
	case 'specials':
		//console.log(JSON.stringify(json));
		
		if(json.length == 0)
		{
			str = '<div style="text-align:center;">No New Offers Found<div>';
		}
		else
		{
			for (var i=0;i<json.length;i++ )
			{
			
			 //console.log('Video:'+json[i].AdVideoURL);
			  if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				   str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><img src='+SERVER+json[i].AdImgURL+'  style="  width: 90%;  height: auto;  padding: 5px;  text-align: center;></img><br/><hr/></div></div>';
			 
			}
				else
				{
					 //console.log('Img:'+json[i].AdVideoURL);
			str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/></div></div>';
				}
			}
		}
        
		document.getElementById("spec").innerHTML=str;  
		
		break;
	case 'coupons':
		str = '';

        if (json.data.length == 0) 
		 {
                str = '<div style="text-align:center;">No Coupons Found</div>';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div>';
            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
         else
            {
                str += '<div class="coupon inactive">';
            }
            str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
            str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
            str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
            str += '<a href="#">T&amp;C*</a>';
            str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" style="padding:10px;"/></div>';
            str += '<div class="coupon_state "></div>';
            str += '</div></div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
		break;
	case 'inbox':
		
		//console.log('json'+JSON.stringify(json));
		
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
		str += '<li data-icon="false">';
        str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
		str += '<img src="assets/images/open.png" class="msgImg"/>';
        str += '</div><div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><span class="MsgBdr">';
        str += '<span class="msghdr">DM-SMARKT</span><span class="msgTime">'+json[i].msgtime+'</span>';
		str += '<span class="msgDate">' + json[i].msgdate + '</span>';
        str += '<span class="msgTxt">'+json[i].msg+'</span>';
        str += '</span></div></div></div></li>';
	
		}
		
		str +='</ul>';
		document.getElementById("MESSAGES").innerHTML=str;
		break;

	

		case 'centre':
   //console.log('inside centre');
   //   console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="false" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('Online')==0)
   continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }
  //str +='<div  id=map-canvas'+i+' style="height:300px;width:400px;"></li>';
  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;
  /*for (var i=0;i<json.length;i++ )
  {
   if(json[i].storename.indexOf('Email Admin')==0)
   continue;
   
      showTabContent_Map(json[i].storeaddress,i);
  }*/
   $('#ul_locator_sub').listview();
  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	    // console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    //console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="false" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			cityidarr[i]=json.data[i].cityid;
			cityarr[i]=json.data[i].cityname;
		//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
		str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  //console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   //console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:BDT '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:BDT '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		//console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>BDT '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>BDT '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		//console.log(JSON.stringify(json[0]));
		for (var title in json) {
			console.log("title: " + title);
			console.log("Value: " + json[title]);
			str1="http://www.youtube.com/embed/"+json[title];
			str += '<div id="rss_desc"><div><span style=\"color:#167AC6;font-size:12px;font-weight:bold;\">'+title+'</span><HR>';
			str +='<iframe width="100%" height="200" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
			str += '</div></div>';
		}
        document.getElementById("YOUTUBE").innerHTML=str;
		break;
		case 'socialwall_facebook':


		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				//str+='<div class=f_feed_ftr><div class=f_bdy_likes>'+lk+' Likes</div><hr class=hori /><div class=f_bdy_lcs><span><img src=assets/images/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=assets/images/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=assets/images/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='<div class=f_feed_ftr><hr class=hori /><div class=f_bdy_lcs><span><img src=assets/images/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=assets/images/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=assets/images/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':


		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="assets/images/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		//console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		//console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':
		

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Promo code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
        case 'currentorder':
       
       //console.log(JSON.stringify(json[0]));
		for(var i=0;i<json.length;i++)
		{
           
		 str += '<div class="order_inner">';
         str += '<p class="order_info_text">Your order has been placed successfully. Please find details below :</p>'; 
         str += '<div class="allOrders">';
         str += '<h3 class="text_red">Order No : '+json[i].reference_no+'</h3>';
         str += '<p>'+json[i].created+'</p>';
         json[i].item = json[i].item.substring(0,(json[i].item.length-2));
        
         var noofitems = (json[i].item).split(',');
          
         str += '<ul class="orders_desc padding_left15">';
         for(var j=0;j<noofitems.length;j++)
         {
         var items = noofitems[j].split('-');
         str += '<li>';
         //str += '<div class="order_img"><img src="assets/images/order_img1.jpg" alt=""/> </div>';
         str += '<div class="order_desc">';
         str += '<h3 class="orde_item_name">'+items[0]+'</h3>';
         str += '<p>BDT '+items[3]+'</p>';
         str += '<p>Qty. '+items[2]+'</p>';
         str += '</div></li>';
          
         }
         str += '</ul>';
         str += '<a href="tel:9876543210" class="call_now">';
         str += '<img src="assets/images/call_icon.png" alt=""/>';
         str += '</a></div>';
         str += '<p>Call to know your order status</p></div>';
		  
		}
		 $("#orderDetailsTab").html(str);
		break;
		case 'previousorder':
         
       //console.log(JSON.stringify(json[0]));
		for(var i=0;i<json.length;i++)
		{
         str += '<div class="order_inner">'; 
         str += '<div class="allOrders"	>';
         str += '<ul class="orders_desc">';
         str += '<li><div class="order_img">';
         str += '<img src="assets/images/order_img1.jpg" alt=""/>';
         str += '</div>';
         str += '<div class="order_desc">';
         str += '<h3 class="orde_item_name">'+json[i].created+'</h3>';
         str += '<p class="location"><img src="assets/images/order_location_icon.png" alt=""/><span>'+json[i].address+'</span></p>';
         str += '<p>Total Amount: BDT '+json[i].amount+'</p>';
         str += '<a href="#" class="view_detaits_btn" onclick="javascript:viewDetails(this)">View Details</a>';
         str += '</div>';
         str += '<div class="reOreder_btn">';
         /*str += '<a href="#">';
         str += '<img src="assets/images/reOrder.png" alt=""/>';
         str += '<span>Re-Order</span>';
         str += '</a>';*/
         str += '</div></li></ul>';
         str += '<div class="order_details">';
         str += '<h3 class="text_red">Order No : '+json[i].reference_no+'</h3>';
         str += '<p>'+json[i].created+'</p>';
         json[i].item = json[i].item.substring(0,(json[i].item.length-2));
         var noofitems = (json[i].item).split(',');
         str += '<ul class="orders_desc padding_left15">';
         for(var j=0;j<noofitems.length;j++)
         {
         var items = noofitems[j].split('-');
         str += '<li>';
         //str += '<div class="order_img"><img src="assets/images/order_img1.jpg" alt=""/> </div>';
         str += '<div class="order_desc">';
         str += '<h3 class="orde_item_name">'+items[0]+'</h3>';
         str += '<p>BDT '+items[3]+'</p>';
         str += '<p>Qty. '+items[2]+'</p>';
         str += '</div></li>';
          
         }
         str += '</ul>';
         str += '</div>';
         str += '</div>';
         str += '</div>';  
		 
		  
		}
		 $("#prevordersTab").html(str);
		break;


	}
}


function renderTemplatedetail(pageID) {
var str = '';



	switch (pageID) {
		
		case 'aboutus':

			if(user.firstname=='' || user.firstname==null)
				user.firstname='Guest';
			console.log('cardname:-'+user.firstname+' '+user.lastname);

			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			document.getElementById("tpoint").innerHTML = 'POINTS: ' +user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+user.mobile+'&choe=UTF-8" style="padding:10px;"/>';
			
			/*if(parseInt(user.balance)>=0 && parseInt(user.balance)<=4500)
            {
                document.getElementById("mType").innerHTML ='Silver Member';
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('silverslab').className = 'active';
            }
            else if(parseInt(user.balance)>=4501 && parseInt(user.balance)<=10000)
            {
                document.getElementById("mType").innerHTML ='Gold Member';
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('goldslab').className = 'active';
            }
            else if(parseInt(user.balance)>=10001)
            {
                document.getElementById("mType").innerHTML ='Platinum Member';
               document.getElementById('silverslab').className = '';
               document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';
		       document.getElementById('platinumslab').className = 'active'; 
            }*/


			break;

		case 'page-card':
			
			document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpoint").innerHTML = tstr;
			document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			document.getElementById("headername").innerHTML='Membership';
			 
			break;


			case 'page-card-punch':
			
			


						document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='<span style="color:#ffffff;"><br><br>';
			//console.log("user.visit_frequency)"+user.visit_frequency);
            //user.visit_frequency='2';
			//console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
			 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star11.png"/>';
			}
			 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star.png"/>';
			}
			pstr +='</span>'
			//console.log("pstr"+pstr);



            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';
			break;

		    case 'shop':
            str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
            str +='</ul>';
			
            $("#" + pageID + " .ui-content").html(str);
    $('#ul_shop').listview();
   break;
  
	}
	}





function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}

function showTabContentRSS(id, url) {
  if(url==json_fb)
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

     

          localStorage.setItem('facebook_smarket',JSON.stringify(json.item));
     

    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_smarket')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json);

     

          localStorage.setItem('youtube_smarket',JSON.stringify(json));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_smarket')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter)
{


  $.ajax({
                url: url,
                type: 'GET',
                timeout: 50000,
				dataType: 'json',
                success: function (data, textStatus, xhr) {

				//console.log(JSON.stringify(data));
				renderTemplate(id, data);

			
            //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
            localStorage.setItem('twitter_smarket', JSON.stringify(data));
                },
                error: function (xhr, textStatus, errorThrown) {
					var err = eval("(" + xhr.responseText + ")");

					alert(err.Message);

                  try {
				} catch (err)
				{
					renderTemplate(id, JSON.parse(localStorage.getItem('twitter_smarket')));
					//alert('here in catch');
				}
            //alert("Oops network error!!Please try again");
                }
            });


}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.body);
			
     
			//console.log(JSON.stringify(json.body));
          localStorage.setItem('pinterest_smarket',JSON.stringify(json.body));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_smarket')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_smarket',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_smarket')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.user);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_smarket',JSON.stringify(json.items));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_smarket')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}



 
}
//newfeedback
function changeRate(element)
{

	//var tImage = document.getElementById('rate_img');
	$('#feedbackmsg').html('');

	if(element=='b_icon1')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','0.4');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='1';
		document.getElementById("fdbk_text").innerHTML='Poor';
		//tImage.src = '/img/rating_img.png';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon2')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','0.4');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='2';
		document.getElementById("fdbk_text").innerHTML='Fair';
		
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon3')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','0.4');
		$("#b_icon5").css('opacity','0.4');
		rating='3';
		document.getElementById("fdbk_text").innerHTML='Good';

		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon4')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','0.4');
		rating='4';
		document.getElementById("fdbk_text").innerHTML='Awesome';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
	else if(element=='b_icon5')
	{
		$("#b_icon1").css('opacity','1');
		$("#b_icon2").css('opacity','1');
		$("#b_icon3").css('opacity','1');
		$("#b_icon4").css('opacity','1');
		$("#b_icon5").css('opacity','1');
		rating='5';
		document.getElementById("fdbk_text").innerHTML='Excellent';
		setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);
	}
    else if(element=='b_icon1_rate')
	{
		$("#b_icon1_rate").css('opacity','1');
		$("#b_icon2_rate").css('opacity','0.4');
		$("#b_icon3_rate").css('opacity','0.4');
		$("#b_icon4_rate").css('opacity','0.4');
		$("#b_icon5_rate").css('opacity','0.4');
		rating='1';
		document.getElementById("fdbk_text1").innerHTML='Poor';
		//tImage.src = '/img/rating_img.png';

		/*setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);*/
	}
	else if(element=='b_icon2_rate')
	{
		$("#b_icon1_rate").css('opacity','1');
		$("#b_icon2_rate").css('opacity','1');
		$("#b_icon3_rate").css('opacity','0.4');
		$("#b_icon4_rate").css('opacity','0.4');
		$("#b_icon5_rate").css('opacity','0.4');
		rating='2';
		document.getElementById("fdbk_text1").innerHTML='Fair';
		
		/*setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);*/
	}
	else if(element=='b_icon3_rate')
	{
		$("#b_icon1_rate").css('opacity','1');
		$("#b_icon2_rate").css('opacity','1');
		$("#b_icon3_rate").css('opacity','1');
		$("#b_icon4_rate").css('opacity','0.4');
		$("#b_icon5_rate").css('opacity','0.4');
		rating='3';
		document.getElementById("fdbk_text1").innerHTML='Good';

		/*setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);*/
	}
	else if(element=='b_icon4_rate')
	{
		$("#b_icon1_rate").css('opacity','1');
		$("#b_icon2_rate").css('opacity','1');
		$("#b_icon3_rate").css('opacity','1');
		$("#b_icon4_rate").css('opacity','1');
		$("#b_icon5_rate").css('opacity','0.4');
		rating='4';
		document.getElementById("fdbk_text1").innerHTML='Awesome';
		/*setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);*/
	}
	else if(element=='b_icon5_rate')
	{
		$("#b_icon1_rate").css('opacity','1');
		$("#b_icon2_rate").css('opacity','1');
		$("#b_icon3_rate").css('opacity','1');
		$("#b_icon4_rate").css('opacity','1');
		$("#b_icon5_rate").css('opacity','1');
		rating='5';
		document.getElementById("fdbk_text1").innerHTML='Excellent';
		/*setTimeout(function(){
            $("#feedbackpop").popup();
			$("#feedbackpop").popup("open");
			$('#feedfrm').show();
		}, 1000);*/
	}
	else
	{
		rating='0';
	}
	



}

function rateFeed(){
	console.log("Rating:"+rating+" by:"+user.mobile);
}

$(document).on('pageshow', '#feedback', function (event, ui) {

	$('#feed_mobile').val(user.mobile);
	loadLocation();

});

function submitFeedback(){

// console.log("Rating:"+rating);

 var quality=$('input[name="radio-choice-a"]:checked').val();
 var experience=$('input[name="radio-choice-b"]:checked').val();
 var staff=$('input[name="radio-choice-c"]:checked').val();
 var variety=$('input[name="radio-choice-d"]:checked').val();
 var refer=$('input[name="radio-choice-e"]:checked').val();
 var shopagain=$('input[name="radio-choice-f"]:checked').val();

 var mobile=$('#feed_mobile').val();
 var bill_loc = $('#bill_loc').val();
 var comments=$('#feed_suggestion').val();



 if(mobile==''){
		  toast('Please enter mandatory fields!');
		}
 else{

   $.ajax({
   url: SERVER+'feedback_json.asp', //login.php
    type: 'GET',
    timeout: 50000,
    dataType: 'html', //xml/html/script/json/jsonp
    data: {

				'MobileNo': mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': bill_loc,    
				'Var1': quality,   
				'Var2': experience,     
				'Var3': staff, 
				'Var4': variety,    
				'Var5': refer,      
				'Var6': shopagain,     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {
  
				//console.log('JSONDATA:'+JSON.stringify(data));
   
				$('#feedfrm').hide();

				$('#feedbackmsg').html('Thanks for submitting your feedback.');
				
				resetFeeds();
				resetFeeds();

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}
//ends here
function resetFeeds()
{
				$("input[type='radio']").checkboxradio();
				$("input[type='radio']").checkboxradio("refresh");
				$("input[type='radio']").removeAttr("checked");

		        $('input[name="radio-choice-a"]').attr('checked', false);
				$('input[name="radio-choice-a"]').prop('checked',false);
				$('input[name="radio-choice-b"]').attr('checked', false);
				$('input[name="radio-choice-b"]').prop('checked',false);
				$('input[name="radio-choice-c"]').attr('checked', false);
				$('input[name="radio-choice-c"]').prop('checked',false);
				$('input[name="radio-choice-d"]').attr('checked', false);
				$('input[name="radio-choice-d"]').prop('checked',false);
				$('input[name="radio-choice-e"]').attr('checked', false);
				$('input[name="radio-choice-e"]').prop('checked',false);
				$('input[name="radio-choice-f"]').attr('checked', false);
				$('input[name="radio-choice-f"]').prop('checked',false);

				document.getElementById("bill_loc").selectedIndex = "0";
				$("#bill_loc").selectmenu("refresh");

				$('#feed_suggestion').val('');
}

function successHandler (result) {
	//alert('Callback Success! Result = '+result)
	}
function errorHandler(error) {
	 //alert(error);
	}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "358796543839"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;

					 localStorage.setItem("deviceid",reg_id);

                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						alert(e);
                     }
					);
    }

function showPOPup1()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Please wait...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    

    $popUp.popup('open').trigger("create");

}
$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});

function tokenHandler(result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    reg_id = result;
    localStorage.setItem("deviceid",reg_id);
    //alert(reg_id);
}

function shareApp()
{
	window.plugins.socialsharing.share('Hi, Join smarket Rewards.', null, 'https://taghash.co/shareimg/smarket.jpg', 'https://smarket.mloyalretail.com/mapp');
}

function rateApp()
{
	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		 if (deviceType=='iPad' || deviceType=='iPhone') 
			 {
                //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
				window.open('http://180.179.202.114:82/mloyaliphone.jsp?brandname='+brandname);
                //window.open('itms-apps://itunes.apple.com/us/app/wang-wooers-club/id1274926490?ls=1&mt=8','_system');
			 } 
		 else if (deviceType=='Android') 
			 {
                //window.open('market://details?id=<package_name>');
				//window.open('http://180.179.218.225:82/mloyalandroid.jsp?brandname='+brandname);
                window.open("market://details?id=com.mobiquest.smarket","_system");
             }
		else if (deviceType=='BlackBerry')
			{
                //window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
				window.open('http://180.179.202.114:82/mloyalbb.jsp?brandname='+brandname);
            }
}


function showFbNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'block');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'block');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_facebook', json_fb);

  
}

function showTwitterNew(){

	$("#navBdr_twitter").css('display', 'block');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'block');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_twitter', RSS_twitter);
  
}

function showInstagramNew(){

	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'none');
    $("#navBdr_instagram").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'block');
    $("#PINTEREST").css('display', 'none');
	
	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	//showTabContentRSS('socialwall_instagram', RSS_instagram);
    
	$.instagramFeed({
		'username': 'smarket',
		'get_raw_json': true,
		'callback': displayInstagram
	});
  
}

function displayInstagram(json)
{
	//console.log('instagram1:'+json);

	renderTemplate('socialwall_instagram',json);
}

function showYoutubeNew(){

    $("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_youtube").css('display', 'block');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'none');
	$("#YOUTUBE").css('display', 'block');

	$.mobile.changePage( "#socialpg", { transition: "none"} ); 
	showTabContentRSS('socialwall_youtube', RSS_youtube);
  
}

function showPinterestNew(){
	
	$("#navBdr_twitter").css('display', 'none');
    $("#navBdr_facebook").css('display', 'none');
    $("#navBdr_pinterest").css('display', 'block');
    $("#navBdr_instagram").css('display', 'none');

	$("#TWITTER").css('display', 'none');
    $("#FACEBOOK").css('display', 'none');
    $("#INSTAGRAM").css('display', 'none');
    $("#PINTEREST").css('display', 'block');

	$.mobile.changePage( "#socialpg", { transition: "none"} );
	showTabContentRSS('socialwall_pinterest', RSS_pinterest);
	//openInWebView('https://www.pinterest.com/rannagill/');
}
function loadCity()
{

    var cityid='';
	$.ajax({
   url: SERVER+'city_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";
        for (var i = 0; i < data.data.length; i++)
			{
				listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
             } 
      //console.log(listItems);
	  $("#city_loc").html(listItems);
      
   
    },
    error: function(xhr, textStatus, errorThrown) {
 //$.mobile.changePage( "#shop", { transition: "slide"} );
   //$('#login-msg').html('wtf: '+textStatus+': '+errorThrown); 
  // $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
	 
}



function loadLocation()
{

var cityid= $('#city_loc').val();
//var cityid= '';
  
$.ajax({
   url: SERVER+'store_locator_json.asp', 
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {city:cityid },
    complete: function(xhr, textStatus) {
 
    },
    success: function(data, textStatus, xhr) {
 
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";

        for (var i = 0; i < data.length; i++)
			{
				if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0  )
				continue;

                listItems+= "<option value='" + data[i].storeid + "'>" + data[i].storename + "</option>";
             } 
 
	  $("#bill_loc").html(listItems);
      $("#bill_loc1").html(listItems);
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function loadpetpoojaCity()
{


     var cityid='';
	 $.ajax({
   //url: SERVER+'mloyallogin_json.asp', //login.php
   url: shopcmsurl+'getcat/locate_city', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";
        for (var i = 0; i < data.length; i++)
			{
				listItems+= "<option value='" + data[i].city_name + "'>" + data[i].city_name + "</option>";
             } 
      //console.log(listItems);
	  $("#city_loc").html(listItems);
      
   
    },
    error: function(xhr, textStatus, errorThrown) {
 //$.mobile.changePage( "#shop", { transition: "slide"} );
   //$('#login-msg').html('wtf: '+textStatus+': '+errorThrown); 
  // $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
	 
}

function loadLocation2()
{
/* $("#outlets").slideUp("fast");
 $(".overlay").fadeOut(300);

 var cityid= $('#city_loc').val();
  
 $.ajax({
   url: SERVER+'store_locator_json.asp', 
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: { city:cityid },
    complete: function(xhr, textStatus) {
 
    },
    success: function(data, textStatus, xhr) {
 
   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";

        for (var i = 0; i < data.length; i++)
			{
				

                listItems+= "<option value='" + data[i].restaurantid + "'>" + data[i].restaurantname + "</option>";
             } 
 
	  //$("#bill_loc").html(listItems);
      $("#bill_loc1").html(listItems);
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });*/



 $("#outlets").slideUp("fast");
 $(".overlay").fadeOut(300);

 if ($("input[name='orderType']:checked").val() == 'delivery')
 {
 	
	 getAllAreas();

 }
 else
 {
	 getPickuplocations();
	 
 } 
	


}


function getPickuplocations() {

 $("#wait").css("display", "none"); 
 

 
 var ls='';
 var cityid= $('#city_loc').val();

	$.ajax({
            //url: shopcmsurl+'getcat/getitems/',
            url: SERVER+'store_locator_json.asp',
            type: 'GET',
            timeout: 30000,
			dataType: 'json', 
            data: { },
            success: function (data, textStatus, xhr) {
  

				for (var i = 0; i < data.length; i++)
				{
					if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0  || data[i].storename.indexOf('KA')>=0  || data[i].storename.indexOf('Ka')>=0)
					continue;

					 ls += '<li><a href="javascript:setselectedstorenew(\''+data[i].storeid+'\',\''+data[i].storename+'\')">' + data[i].storename + '</a></li>';
				 } 
				
				$("#areasearchlist").html(ls); 
				$('#inset-autocomplete-input').val('');
				$('#areasearchlist').listview('refresh');

				$(".overlay").fadeIn(300);
				setTimeout(function(){
					$("#outlets").slideDown("fast");
				}, 500)
       
            },
            error: function (xhr, textStatus, errorThrown) {
              console.log(xhr+'....'+textStatus+'....'+errorThrown);
            }
        });
		
}

$(document).on("pageinit", "#selectLocation", function(){
    $("#deliverydiv").hide();

    $("input[name='orderType']").on("change", function() {
	
        if ($("input[name='orderType']:checked").val() == 'delivery')
		{
            $("#deliverydiv").show();
        
            $("#pickupdiv").hide();
		}
		else
		{
			$("#pickupdiv").show();
			
            $("#deliverydiv").hide();
		}
    });
});

$(document).on("pageinit", "#sel_location_new", function(){
    /*$("#pickupdiv").hide();

    $("input[name='orderType']").on("change", function() {
	
        if ($("input[name='orderType']:checked").val() == 'delivery')
		{
            $("#deliverydiv").show();
        
            $("#pickupdiv").hide();
		}
		else
		{
			$("#pickupdiv").show();
			
            $("#deliverydiv").hide();
		}
    });*/
});


function setselectedstore()
{
	var str = $('#bill_loc1').val();
	var strname = $("#bill_loc1 option:selected").text();

	localStorage.setItem("selectedstoresmarket",str);
	setLocation(str,strname);
	
}


function setselectedstorenew(str,strname)
{

	localStorage.removeItem("selectedareasmarket");

	localStorage.setItem("selectedstoresmarket",str);
	setLocation(str,strname);
	
}

function setarea(str)
{
  $('#inset-autocomplete-input').val('');
  $('#areasearchlist').listview('refresh');
  localStorage.removeItem("selectedareasmarket");
  
  //alert(str);
  var str1 = str.substring(str.indexOf("-")+1,str.length);
  var str2 = str.substring(0,str.indexOf("-"));
 // alert(str1);
  var areapresent = false;
 // alert(areaname);
  for(var i=0;i<areaname.length;i++)
	{
	  var area = areaname[i];
	  if(area.indexOf(str1)>=0)
		{
		  str = area;
		  areapresent=true;
		  //alert('aaa'+area);
		  break;
		}
	}
	
	localStorage.setItem("selectedareasmarket",str);
	localStorage.setItem("selectedstoresmarket",str2);
    
     setLocation(str2,str);


	  $('#inset-autocomplete-input').val(str);
	 // $('#orderdatetimediv').css('display','block');
   
  /*if(areapresent==true)
	{
	  localStorage.setItem("selectedarea_cakesta",str);
	  $('#inset-autocomplete-input').val(str1);
	  $('#orderdatetimediv').css('display','block');
	}
	else
	{
	 localStorage.setItem("selectedarea_cakesta",str);
	  $('#inset-autocomplete-input').val(str);
	  $('#orderdatetimediv').css('display','block');
	 toast('No matching area found');
	 localStorage.removeItem("selectedarea_cakesta");
	  $('#inset-autocomplete-input').val('');
	 $('#orderdatetimediv').css('display','none');
	}*/
 //localStorage.geItem("selectedarea_cakesta");
  //document.getElementById("mylocstr").innerHTML='Order delicious food @'+loc_name;
  //$.mobile.changePage( "#shop", { transition: "slide"} );
}

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
   var pop1 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
	var pop1 = document.getElementById('purchaseHistory');
		pop1.style.display = 'none';
}


function capturePhoto1()
{
    
			$("input[type=file]").trigger("click");
		
}

$("input[type=file]").change(function(){
			
    
    var aFormData = new FormData();
    
  // alert($("input[type=file]")[0].files[0]);

    aFormData.append("filename", $("input[type=file]")[0].files[0]);
    
    

	aFormData.append("mobile", localStorage.getItem("username"));
    aFormData.append("brand", "smarket");
     

	
	$.ajax(
    {
      url         : "http://103.25.128.61:9296/mloyalfileupload/fileupload1.php",
      type        : "POST",
      contentType : false,
      processData : false,
      data        : aFormData,
      success     : 
        function(data)
        {

		  toast("Your picture has been updated..Please reload page to see changes");
   
         document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg';
      //   document.getElementById("cardImage").src='http://103.25.128.61:9296/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg';
        }
    });

	

});

function gobackfromstore()
{
    if(backstore=='home')
    {
        $.mobile.changePage( "#home", { transition: "none"} );
    }
    else if(backstore=='store')
    {
        showStores();
    }
}


function showhomeShopNew()
{
	$.mobile.changePage( "#shop", { transition: "none"} );
}

function capturePhoto1()
{
    
			$("input[type=file]").trigger("click");
		
}

$("input[type=file]").change(function(){
			
    
    var aFormData = new FormData();
    
  // alert($("input[type=file]")[0].files[0]);

    aFormData.append("filename", $("input[type=file]")[0].files[0]);
    
    

	aFormData.append("mobile", localStorage.getItem("usernamesmarket"));
    aFormData.append("brand", "smarket");
     

	
	$.ajax(
    {
      url         : "http://103.25.128.61:9296/mloyalfileupload/fileupload1.php",
      type        : "POST",
      contentType : false,
      processData : false,
      data        : aFormData,
      success     : 
        function(data)
        {

		  toast("Your picture has been updated..Please reload page to see changes");
   
         document.getElementById("cardImagemenu").src='https://taghash.co/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg';
      //   document.getElementById("cardImage").src='http://103.25.128.61:9296/mloyalfileupload/uploads/smarket_'+localStorage.getItem("usernamesmarket")+'.jpg';
        }
    });

	

});


function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

	

    return http.status != 404;

}

function gotContacts(contacts) {

               
                    for(var i=0, len=contacts.length; i<len; i++) {
                        if(i<contacts.length){


                        
                        var phno=contacts[i].phoneNumbers[0].value.replace(new RegExp('-', 'g'), '');
                        if(phno.length==10 || phno.length==11 || phno.length==12 || phno.length==13)
                       

                        $("#wait").css("display","none"); // hide it initially

                        $.ajax({
                        
                        url:'https://smarket.mloyalretail.com/apis/mycontacts_json.asp?Bulkdata='+contacts[i].displayName+':'+phno,

                        type: 'GET',
                        
                        timeout: 300000,
                        dataType: "json",
                        
                        
                        success: function(data, textStatus, xhr) {
                        
                                
                        },
                        error: function(xhr, textStatus, errorThrown) {
                            }
                    });

                        }
                        
                    }
                
                }

 /*function errorHandler(e) {
                    console.log("errorHandler: "+e);
                }*/



function showScan(){

/*	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
        
	}
	else
	{*/
       
	   cordova.plugins.barcodeScanner.scan(
		  function (result) {
		   var s = "Result: " + result.text + "<br/>" +
		   "Format: " + result.format + "<br/>" +
		   "Cancelled: " + result.cancelled;
			toast(result.text);
			var bcode=result.text;
			//bcode=bcode.slice( -15);
			//resultDiv.val(bcode);
			$('#barcodeno').val(bcode);

		  }, 
		  function (error) {
		   toast("Scanning failed: " + error);
		  }
          ,
                    
                    // options objects
                    {
                        "preferFrontCamera" : false, // default false
                        "showFlipCameraButton" : false // default false
                    }
		 ); 
		
		 //document.getElementById("barcontentscan").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
		// $.mobile.changePage( "#scan_redeem", { transition: "none"} );
	
	//}
	
}

function openInWebView(url)
	{
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#d81665'
    },
    toolbar: {
        height: 75,
        color: '#d81665'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'assets/images/back_btn_br.png',
        wwwImagePressed: 'assets/images/back_btn_br.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}

function openBrowser(url)
	{
	
          //var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#d81665'
    },
    toolbar: {
        height: 75,
        color: '#d81665'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'assets/images/back_btn_br.png',
        wwwImagePressed: 'assets/images/back_btn_br.png',
        align: 'left',
  marginLeft: '15px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


}

$(document).on('pageinit', '#feedbackmain', function (event, ui) {
//$('#login').live('pageinit',function(event){
	
	//$('#login_button').live('tap', function(e){
	$('#feed_email').val(user.emailid);
	$('#feed_mobile').val(user.mobile);
	$('#feed_firstname').val(user.firstname);
	//$('#login_button').live('tap', function(e){
   $(document).on('change', '#feed_how', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		var fname=$('#feed_how').val();
		if(fname=='Already a Customer' || fname=='Through Paper ads or fb' || fname=='Online Search')
    	 {
			$('#feed_jewelpurchase11').css('display','block');
			$('#feed_purpose11').css('display','none');
			$('#feed_hotel11').css('display','none');
			$('#feed_company11').css('display','none');
			$('#feed_conference11').css('display','none');
	     }
		if(fname=='Through Reference' || fname=='Casual Walkin')
	     {
			
			$('#feed_purpose11').css('display','block');
			$('#feed_conference11').css('display','block');
			
	     }
 });

  $(document).on('change', '#feed_purpose', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		var fname=$('#feed_purpose').val();
		if(fname=='Conference')
    	 {
			$('#feed_conference11').css('display','block');
			$('#feed_hotel11').css('display','none');
			$('#feed_company11').css('display','none');
			
	     }
		if(fname=='Business Tourist')
	     {
			$('#feed_hotel11').css('display','none');
			$('#feed_company11').css('display','block');
			$('#feed_conference11').css('display','block');
			
	     }
		 if(fname=='Holiday Tourist')
	     {
			$('#feed_hotel11').css('display','block');
			$('#feed_company11').css('display','block');
			$('#feed_conference11').css('display','block');
			$('#feed_jewelpurchase11').css('display','block');
	     }
		 if(fname=='Medical Tourist' || fname=='Education Tourist' || fname=='Hyderabad Resident')
	     {
			
			$('#feed_hotel11').css('display','none');
			$('#feed_company11').css('display','none');
			$('#feed_conference11').css('display','none');
			
	     }
 });

 $(document).on('change', '#feed_update', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
		var fname=$('#feed_update').val();
		if(fname=='No')
	     {
			$('#feed_namemobile11').css('display','none');
			$('#remarks').css('display','block');
	     }
		if(fname=='Yes')
    	 {
			$('#feed_namemobile11').css('display','block');
			$('#remarks').css('display','block');
	     }
		
 });
		
		$(document).on('tap', '#submit_button_feedback', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
	
		var fname=$('#feed_firstname').val();
		var email=$('#feed_email').val();
		var mobile=$('#feed_mobile').val();

		var how=$('#feed_how').val();
		var purpose=$('#feed_purpose').val();
		var hotel=$('#feed_hotel').val();
		var company=$('#feed_company').val();
		var conference=$('#feed_conference').val();
		var jewelpurchase=$('#feed_jewelpurchase').val();
		var improvement=$('#feed_improvement').val();

		var rank=$('#feed_rank').val();
		var museum=$('#feed_museum').val();
		var collectioncheck=$('#feed_collectioncheck').val();
		var uphaarscheme=$('#feed_uphaarscheme').val();
		var online=$('#feed_online').val();
		var update=$('#feed_update').val();

		var namemobile=$('#feed_namemobile').val();
		var remarks=$('#feed_remarks').val();
		
		var teamknw=$('#feed_teamknw').val();
		var membername=$('#feed_membername').val();

		var add=$('#feed_address').val();
		var desg=$('#feed_desg').val();
		var comp=$('#feed_co').val();

        if(fname=='' || mobile==''){
          toast('Please enter mandatory fields');
		}else{


			$.ajax({
			url: SERVER+'feedback_json.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {


				'MobileNo': mobile,
				'FirstName': fname,
				'LastName': '',
				'EmailId': email,
				'StoreId': '',
				'Var1': how,
				'Var2': purpose,
				'Var3': hotel,
				'Var4': company,
				'Var5': conference,
				'Var6': jewelpurchase,
				'Var7': improvement,
				'Var8': rank,
				'Var9': museum,
				'Var10': collectioncheck,
				'Var11': uphaarscheme,
				'Var12': online,
				'Var13': teamknw,
				'Var14': membername,
				'Var15': update,
				'Var16': namemobile,
				'Var17': remarks,
				'Var18': add,
				'Var19': desg,
				'Var20': comp
				
					
				
			},
			success: function(data, textStatus, xhr) {
				
				    
				toast(data);
				
				$.mobile.changePage( "#home", {transition: "flip"} );
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		}
	});
	
});

function loadMember()
{

  var json={"data":[{"name":"-Select-"},{"name":"Penta Nagesh"},{"name":"Deepak Ratan"},{"name":"Ramesh Kumar"},{"name":"Brij Gopal Bajaj"},{"name":"Arigay Srinath"},{"name":"Lardkha Sai Kumar Singh"},{"name":"Mohammad Akbar Pasha"},{"name":"Rajesh Sharma"},{"name":"Peter Anand"},{"name":"Vunyala Ramesh Kumar"},{"name":"Anudeep Madarboina"},{"name":"Mohd Khaja"},{"name":"Manikabandri Praveen Kumar"},{"name":"Kadiyala Santosh Kumar"},{"name":"Pabboju Venugopal"},{"name":"J.s.r.Vikram Chobey"},{"name":"Prem Sunil Kumar"},{"name":"Sachin Kumar Goyal"},{"name":"Satish Kumar Balusuguri"},{"name":"Arshia Kowser"},{"name":"Sangeetha Bindu Aera"},{"name":"Srikanth Bandi"},{"name":"Mohammed Naseer"},{"name":"Sai Kiran"},{"name":"Kamal"},{"name":"Charan Singh"},{"name":"Mohsin"}]};
        //console.log(json.data.length);
        var listItems= "";
        for (var i = 0; i < json.data.length; i++)
			{
               listItems+= "<option value='" + json.data[i].name + "'>" + json.data[i].name + "</option>";
             } 
      
	  $("#feed_membername").html(listItems);
	 
	 
}

function setLocation(loc,loc1)
{
	 
	localStorage.setItem('selectedstoresmarket',loc);
	localStorage.setItem('selectedstorenamesmarket',loc1);
	
	//document.getElementById("storeloc").innerHTML=loc1;

	$.mobile.changePage( "#dashboard", { transition: "slide"} );
	showCategory();

}

function decrementValue(qtytxt)
{
	var q =  $('#'+qtytxt+'').val();
	if(q==1)
	{
		
		if (confirm('Do you want to remove item from cart?')) 
			{
				viewcart();
			} 
		else {
				$('#'+qtytxt+'').val(q);
			}
	}
	else
	{
		q = parseInt(q)-1;
		$('#'+qtytxt+'').val(q);
	}

}

function incrementValue(qtytxt)
{
	var q =  $('#'+qtytxt+'').val();
    q = parseInt(q)+1;
	$('#'+qtytxt+'').val(q);
}


function showhomeShop()
{
	/*if(typeof localStorage.getItem('selectedstoresmarket')!=undefined && localStorage.getItem('selectedstoresmarket')!=null && localStorage.getItem('selectedstoresmarket')!='')
    { 
		$.mobile.changePage( "#dashboard", { transition: "none"} );

		showCategory();
    }
    else
    {
		$.mobile.changePage( "#sel_location_new", { transition: "none"} );
		
	}*/

	$.mobile.changePage( "#categoriesPage", { transition: "none"} );

}

function setorderMode(ordertype)
{

	if(ordertype=='' || ordertype=='null' || ordertype=='undefined' || ordertype==null)
	{
		toast('Please select delievery type.');
	}
	else
	{ 
        //toast(ordertype);
		localStorage.setItem('deliverytypesmarket',ordertype);
		$.mobile.changePage( "#categoriesPage");

	}
}

$(document).on('pageshow', '#categoriesPage', function (event, ui) {

	hideloader();

	localStorage.setItem('deliverytypesmarket','delivery');

	showMainCategory();

});

$(document).on('pageshow', '#homepage', function (event, ui) {

    //hideloader();

    //showMainCategory();

	showcartPopup();
				
    
});

function showGeolocation1()
{
	try{
 cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition();
            }, 1500);
          },
          function() {
            alert("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
 }
 catch(e)
 {
 //	alert(e.toString());

 	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);

 }
        
      //  navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}
function getPosition() {
         navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}

function showGeolocation()
{

	if (navigator.geolocation)
	{
        navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError,{ enableHighAccuracy: true });
    } 
	else
	{
        toast('Location could not be traced..');
    }
	
}

function geolocationSuccess(position) 
{
		var latlng = position.coords.latitude+','+position.coords.longitude;
		showMyLocation(latlng);						
}

   
function geolocationError(error) {
        toast('unable to trace');
}

function showMyLocation(addr)
{
    var url="https://maps.googleapis.com/maps/api/geocode/json";

	$.getJSON(
		url, {
		latlng : addr,
		key:'AIzaSyCH13Nmq821ivXgHoFfm-LmBS1GQGjhqAE',
		sensor : 'false'
	}, function (json) {
        
		console.log(json);
		toast_loc('Current Location: '+json.results[0].formatted_address);
		//drawMap_new(new google.maps.LatLng(addr));

		  var address = '';
		  var pin = '';
		  var country = '';
		  var state = '';
		  var city = '';
		  var streetNumber = '';
		  var route ='';

	for (var i = 0; i < json.results[0].address_components.length; i++) {
        var component = json.results[0].address_components[i];
        var addressType = component.types[0];

        switch (addressType) {
            case 'street_number':
                streetNumber = component.long_name;
                break;
            case 'route':
                route = component.short_name;
                break;
            case 'locality':
                city = component.long_name;
                break;
            case 'administrative_area_level_1':
                state = component.long_name;
                break;
            case 'postal_code':
                pin = component.long_name;
                break;
            case 'country':
                country = component.long_name;
                break;
        }
       }

    
	//$('#address_fname').val(checkforundefined(localStorage.getItem('firstname')));
	//$('#address_lname').val(checkforundefined(localStorage.getItem('lastname')));
	$('#address_mobile').val(checkforundefined(localStorage.getItem('usernamesmarket')));
	//$('#address_add1').val(streetNumber);
	$('#address_add1').val(json.results[0].formatted_address);
	$('#address_add2').val(route);
	$('#address_city').val(city);
	$('#address_pincode').val(pin);
	$('#address_state').val(state);


	$('#add_address_pop').popup();
	$('#add_address_pop').popup("open");
		
		
		
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function toggleDiv(str,tg)
{
    $('#'+tg+'').find(".minus").toggleClass("plus");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    $('#'+tg+'').toggleClass("bg_toggle");
}

function checkaddress(str)
{
	var val = $('#'+str).val();
	if(val.indexOf('/')>=0)
	{
		val = val.replace('/','-');
		toast("Special character / not allowed");
	}
	$('#'+str).val(val);
}

function submitpayment()
{

 var products = localStorage.getItem("id_strsmarket");
 var totamt = localStorage.getItem('totalamtsmarket');
 var payamt =  localStorage.getItem('payableamtsmarket');
 var ptsredeem = localStorage.getItem('pointsredeemsmarket');
 var paytype = localStorage.getItem('paymenttypesmarket'); 
  if(paytype == undefined || paytype == null)
	 paytype='';
 var discount =  localStorage.getItem('discountsmarket');
 var deliverycharge =  localStorage.getItem('deliverychargesmarket');
 var tax =  localStorage.getItem('taxsmarket');
 var location1 = localStorage.getItem("selectedstoresmarket");
 if(location1==undefined && location1 ==null)
	 location1 = localStorage.getItem("selectedareasmarket");

 var fname= checkforundefined(localStorage.getItem('firstname'));
 var lname= checkforundefined(localStorage.getItem('lastname'));
 var email= checkforundefined(localStorage.getItem('emailid'));
 var phone= checkforundefined(localStorage.getItem('usernamesmarket'));
 var address1= checkforundefined(localStorage.getItem('u_addr1'));
 var address2= checkforundefined(localStorage.getItem('u_addr2'));
 var city= checkforundefined(localStorage.getItem('u_city'));
 var state= checkforundefined(localStorage.getItem('u_state'));
 var pcode = checkforundefined(localStorage.getItem('u_pin'));
 var couponcode= checkforundefined(localStorage.getItem("couponcodesmarket"));
 

 var deliverytype = localStorage.getItem("deliverytypesmarket");


 var cdate = $('#cdate').val();
 var cslot = $('#cslot').val();
 
/*if(localStorage.getItem("selectedareasmarket")!=undefined && localStorage.getItem("selectedareasmarket") !=null)
{
	deliverytype='delivery';
}
else 
{
	deliverytype='pickup';
}*/

 var mandate=false;

 if( deliverytype== 'delivery'){
	 if(fname=='' || lname=='' || email=='' || phone==''|| address1=='' || city=='' || state=='' || pcode=='' || products=='' || payamt=='' || paytype==''){
		  mandate=true;
	 }
     else { mandate=false; }
		}
else if(deliverytype== 'pickup'){
	if(fname=='' || lname=='' || email=='' || phone==''|| address1=='' || city=='' || products=='' || payamt=='' || paytype=='')
	{
		  
		  mandate=true;
	}
    else { 
        mandate=false;
        }
}
 if(mandate)
 {
		  toast('Please check for delivery address');
		  //viewcart();
 }
 else
 {
 	    
  $.ajax({
    url: shopcmsurl+'checkout',
    type: 'GET',
    timeout: 50000,
    data: {
                'products': products,
				'totamt': totamt,
				'payamt': payamt,
				'ptsredeem': ptsredeem,       
				'paytype': paytype,  
				'discount': discount, 
				'deliverycharge': deliverycharge,	
				'tax': tax,	
				'fname': fname,    
				'lname': lname,
                'email': email,   
				'phone': phone,    
				'address1': address1,
                'address2': address2,
                'city': city,    
				'state': state,
                'postalcode': pcode,
				'coupon_code': couponcode,
                'deviceId': localStorage.getItem("deviceid"),
                'deviceType': deviceType,
                'deliverytype': deliverytype,
                'location': location1,
				'delivery_date': cdate,
				'deliverytime': cslot
					
			},
   
    success: function(data, textStatus, xhr) {

		console.log('JSONDATA 1:'+JSON.stringify(data));

		if(data.indexOf("<style")>0)
		{
			data = data.substring(0, data.indexOf("<style"));
		}
			data = data.replace(/^\s+|\s+$/g,'');
		//console.log('after removing style JSONDATA:'+JSON.stringify(data));
		var str1 = '';
        data=JSON.parse(data);

		console.log('JSONDATA 2:'+JSON.stringify(data));

       /* if(data.url=='')
        {
			str1 = 'Thank you for placing order. Order id is '+data.order_id+'. Waiting for order confirmation.';
			$("#thankyoupage .ui-content").html(str1);
			$.mobile.changePage( "#home", { transition: "none"} );

			toast('Thank you for placing order. Order id is '+data.order_id+'. Waiting for order confirmation.');   
        }
        else
        {*/


		if(paytype == 'cash')
        {
			$('#pay_confirm_pop').popup();
			resetcsData();
			if(deliverytype== 'pickup')
			{
			 document.getElementById("pdiv").innerHTML='Your Pickup has been Confirmed.';
			 document.getElementById("pickupcode").innerHTML='Pickup Code : '+data.order_id;

			}
			else
			{
			 document.getElementById("pdiv").innerHTML='Your Order has been Confirmed.';
			 document.getElementById("pickupcode").innerHTML='Order Id : '+data.order_id;	
			}
			$('#pay_confirm_pop').popup("open");
        
		}
		else
		{

			var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
			var the_width = $(window).width();
			var purl=data.url;
			//var porderid=data.order_id;
            //openBrowser11(purl,porderid,deliverytype);

			openBrowser11(purl);
		}	
       // }
        
		/*localStorage.removeItem('addoncartsmarket');
        localStorage.removeItem('shoppingcartsmarket');
        localStorage.removeItem('shoppingcartitemsmarket');
		localStorage.removeItem("id_strsmarket");
		localStorage.removeItem("totalamtsmarket");
		localStorage.removeItem("payableamtsmarket");
		localStorage.removeItem("pointsredeemsmarket");
		localStorage.removeItem("paymenttypesmarket");
		localStorage.removeItem("discountsmarket");
		localStorage.removeItem("couponcodesmarket");
		localStorage.removeItem("deliverychargesmarket");
		localStorage.removeItem("selectedstoresmarket");
		localStorage.removeItem("selectedareasmarket");*/
		
        var items = 0;
        /*$('#noofitems_shop').text(items);
		$('#noofitems_prod').text(items);
		$('#noofitems_prod1').text(items);
		$('#noofitems_prod2').text(items);
		$('#noofitems_main').text(items);
		$('#noofitems_cart').text(items);
		$('#noofitems_cart1').text(items);
		$('#noofitems_prod_detail').text(items);
        $('#noofitems_pay').text(items);
	    $('#noofitems_prod_detail').text(items);
		$('#txtfirstname').val('');
		$('#txtfirstname').val('');
		$('#billing_email').val('');
		$('#billing_phone').val('');
		$('#billing_address_1').val('');
		$('#billing_address_2').val('');
		$('#billing_city').val('');
		$('#billing_state').val('');
		$('#billing_postcode').val('');
        var items = 0;*/

       

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 } 
 }

 function openBrowser11(url)
 {
	 
    var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
       				
             if(deviceType=='null')
                deviceType='Android';
    
    if (deviceType == 'iPad' || deviceType == 'iPhone')
	{
                 
                
    cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#4c2355'
    },
    toolbar: {
        height: 70,
        color: '#4c2355'
    },
    title: {
        color: '#ffffff',
		staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'assets/images/back_btn_br3.png',
        wwwImagePressed: 'assets/images/back_btn_br3.png',
        align: 'left',
		marginLeft: '30px',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert("in backpressed");
    checkStatus();
}).addEventListener('closePressed', function(e) {
    //alert("in backpressed");
    checkStatus();
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});    

          }
          else{
                 
            
            //window.open(url, '_blank', 'location=yes'); 
            cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#4c2355'
    },
    toolbar: {
        height: 70,
        color: '#4c2355'
    },
    title: {
        color: '#ffffff',
		staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'assets/images/back_btn_br3.png',
        wwwImagePressed: 'assets/images/back_btn_br3.png',
        align: 'left',
		marginLeft: '15px',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    checkStatus();
}).addEventListener('closePressed', function(e) {
    //alert("in backpressed");
    checkStatus();
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});
        }
       // });
   // });
    /*try{
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "Online Shop", 1);
    }catch(error){}
    */

 }

function checkStatus()
{
	
 $.ajax({
           
			url: shopcmsurl+'getcat/getordersbymobileno/'+user.mobile,
            type: 'GET',
			timeout: 300000,
            dataType: "json",
         
           complete: function(xhr, textStatus) {
		   //called when complete

		    },

			success: function(data, textStatus, xhr) {
			
			if(data[0].TXNSTATUS=='TXN_SUCCESS' && data[0].TXNID!='null' && data[0].TXNID!=null )
			{
			    $.mobile.changePage("#categoriesPage", {transition: "slideup"} );
			  	resetcsData();
				
				//manage_sub1();
			   
			}
			  
			else
            {
            	  toast('Payment failed..');
                  $.mobile.changePage("#payment", {transition: "slideup"} );
            }
                
		
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});

}


function resetcsData()
{

    localStorage.removeItem('u_name1');
	localStorage.removeItem('u_addr1');
	localStorage.removeItem('u_addr2');
	localStorage.removeItem('u_city');
	localStorage.removeItem('u_state');
	localStorage.removeItem('u_pin');

        
		localStorage.removeItem('addoncartsmarket');
        localStorage.removeItem('shoppingcartsmarket');
        localStorage.removeItem('shoppingcartitemsmarket');
		localStorage.removeItem("id_strsmarket");
		localStorage.removeItem("totalamtsmarket");
		localStorage.removeItem("taxsmarket");
		localStorage.removeItem("payableamtsmarket");
		localStorage.removeItem("pointsredeemsmarket");
		localStorage.removeItem("paymenttypesmarket");
		localStorage.removeItem("discountsmarket");
		localStorage.removeItem("couponcodesmarket");
		localStorage.removeItem("deliverychargesmarket");
		localStorage.removeItem("selectedstoresmarket");
		localStorage.removeItem("selectedareasmarket");

		$('#cashopt').css('background-color','#ffffff');
        $('#paytmopt').css('background-color','#ffffff');

		hidecartPopup();
}


function hidecartPopup()
{
	document.getElementById("viewCart").innerHTML= '';

		$(".overlay").fadeOut(300);
		$("#viewCart").slideUp("fast");
}

 function getAllAreas() {
 $("#wait").css("display", "none"); 
 
 localStorage.removeItem("arealist_smarket");
 localStorage.removeItem("areaidlist_smarket");
 

 areaname=new Array();
 areaid=new Array();
 
 var ls='';
 var cityid= $('#city_loc').val();

	$.ajax({
            //url: shopcmsurl+'getcat/getitems/',
            url:shopcmsurl+'getcat/get_areaApi',
            type: 'GET',
            timeout: 30000,
			dataType: 'json', 
            data: { },
            success: function (data, textStatus, xhr) {
              //  console.log(JSON.stringify(data));
			   console.log((data[0].id));
				   for(var i=0;i<data.length;i++)
				{
		        			
                if(areaname.indexOf(data[i].name)==-1)
				{
	            areaname.push(data[i].name);
				}
				if(areaid.indexOf(data[i].id)==-1)
				{
	            areaid.push(data[i].id);
				}
                
				//console.log(product);
                localStorage.setItem("arealist_smarket",JSON.stringify(areaname));
				localStorage.setItem("areaidlist_smarket",JSON.stringify(areaid));
                
				var tmp =  data[i].id+"-"+data[i].name;
                
                ls += '<li><a href="javascript:setarea(\''+tmp+'\')">' + data[i].name + '</a></li>';
				}
				//console.log(ls);
				
				$("#areasearchlist").html(ls); 
				$('#inset-autocomplete-input').val('');
				$('#areasearchlist').listview('refresh');

				$(".overlay").fadeIn(300);
				setTimeout(function(){
					$("#outlets").slideDown("fast");
				}, 500)
       
            },
            error: function (xhr, textStatus, errorThrown) {
              console.log(xhr+'....'+textStatus+'....'+errorThrown);
            }
        });
		
}


function checkmobile(mob)
{
	var mobile = $('#'+mob).val();
	//alert(mobile);
	//alert(mobile.match('[0-9]{10}'));*/
	
    //var filter = /^[6-7][0-9-+]+$/;
    //if (filter.test(mobile)) {
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10 && mobile.length==10)
    {
        return true;
    }
    else {
		
		//for development purpose only
		
		//$.mobile.changePage( "#transferpointspg1", { transition: "slide"} );
		
		//for development purpose only
		
    	alert("Please put valid 10 digit mobile number");
        $('#'+mob).val('');
        return false;
		
		//for development purpose only
		
		
    }
}

function logoutApp()
{
	localStorage.setItem("usernamesmarket",'');
	localStorage.setItem("passwordsmarket",'');
	localStorage.setItem("profiledone_smarket",'');
	

	$.mobile.changePage('#login');
}

function loadStates()
{
	//console.log("Loading statelist.....");

     /*$.getJSON(
            SERVER2+'Get_allstate_json_api.asp', 
			{

			},
		    function (json) {

				 //localStorage.setItem("smarketstatejson", JSON.stringify(json));
				 //console.log(JSON.stringify(json));*/

				 var json ={"data":[{"stateid":1,"statename":"Barisal"},{"stateid":2,"statename":"Chittagong"},{"stateid":3,"statename":"Dhaka"},{"stateid":4,"statename":"Khulna"},{"stateid":5,"statename":"Mymensingh"},{"stateid":6,"statename":"Rajshahi"},{"stateid":7,"statename":"Rangpur"},{"stateid":8,"statename":"Sylhet"}],"error":[]};

				 var listItems= "";
				     listItems+= "<option value='0' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>--State--</option>";
				 for (var i = 0; i < json.data.length; i++)
					{
						listItems+= "<option value='" + json.data[i].statename + "'>" + json.data[i].statename + "</option>";
					}

				  $("#address_state").html(listItems);
				  $("#address_state_edit").html(listItems);
  
	 
	 //}).error(function () {   });
}

$(document).on('pageshow', '#sel_location_manually', function (event, ui) {

	loadUserAddress();

});



$(document).on('pageshow', '#sel_store_manually', function (event, ui) {

	loadUserStores();

});

function openaddrpop()
{

	//showGeolocation();
	showGeolocation1();

}
function openaddrpop_1()
{
	$('#add_address_pop').popup();
	$('#add_address_pop').popup("open");
}

function loadUserAddress()
{
	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getuseraddress/'+user.emailid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
					 
			//console.log('JSONDATA n address:'+JSON.stringify(data));
			var str = '';

			if(data.length==0)
			{
				str +='No saved adddress found. Please add now to proceed';
			}
			else
			{
                
				for(var i=0;i<data.length;i++)
				{
                    
                    /*str += '<div class="sel_add_block" style="margin-bottom: 20px;">'+
						'<div class="sel_add_inner">'+
							'<div class="sel_img">'+
								'<img src="assets/images/map_marker.png" class="img-responsive" alt="">'+
							'</div>'+
							'<div class="sel_add">'+decodeURI(data[i].name)+'<br>'+decodeURI(data[i].address)+'<br>'+decodeURI(data[i].city)+' - '+decodeURI(data[i].postal_code)+'<br>'+decodeURI(data[i].state)+'</div>'+
							'</div>'+
							'<div class="action_btn">'+
							'<a href="javascript:setselectedAddress(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="add_edit"><img src="assets/images/right_mark2.png" class="img-responsive" alt=""></a>'+
						    '<a href="javascript:showeditpopup_address(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="add_edit"><img src="assets/images/edit_icon.png" class="img-responsive" alt=""></a>'+
							'<a href="javascript:delete_address(\''+data[i].id+'\');" class="add_delete"><img src="assets/images/delete_icon.png" class="img-responsive" alt=""></a>'+
							'</div>'+
							'</div>';*/



					str +='<label class="store_pick_label">'+
					'<input type="radio" data-role="none" name="sel_store">'+
					'<div class="store" onclick="javascript:setselectedAddress(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');">'+
						'<div class="store_img_2">'+
							'<img src="assets/images/map_marker.png" class="img-responsive" alt="">'+
						'</div>'+
						'<div class="store_add">'+
							'<p style="margin: 0;"><span class="add_name">'+decodeURI(data[i].name)+'</span><br>'+decodeURI(data[i].address)+'<br>'+decodeURI(data[i].city)+'-'+decodeURI(data[i].postal_code)+'<br>'+decodeURI(data[i].state)+'</p>';
					str +='</div>';
					//str +='<a href="javascript:setselectedAddress(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="bg_primary text_black store_btn">Select Address</a>';
					str +='</div>';
					str +='</label>';




				
                    
				}
			}

			document.getElementById("addr_div").innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

$(document).on('pageshow', '#my_address', function (event, ui) {

	loadUserAddress2();

});

function loadUserAddress2()
{
	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getuseraddress/'+user.emailid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
					 
			//console.log('JSONDATA n address:'+JSON.stringify(data));
			var str = '';

			if(data.length==0)
			{
				str +='No saved adddress found. Please add now to proceed';
			}
			else
			{
                
				str +='<ul>';

				for(var i=0;i<data.length;i++)
				{

							str +='<li>';
							str +='<div class="past_order">';
							str +='<div class="past_brief">';
							str +='<h3>'+decodeURI(data[i].name)+'</h3>';
							str +='<h4>'+decodeURI(data[i].address)+'<br>'+decodeURI(data[i].city)+' - '+decodeURI(data[i].postal_code)+'<br>'+decodeURI(data[i].state)+'</h4>';
						    str +='</div>';
							str +='<div class="past_description">';
							str +='<div class="order_action">';
							str +='<a href="javascript:showeditpopup_address(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="reorder_btn" data-role="none">Edit</a>';
							str +='<a href="javascript:delete_address(\''+data[i].id+'\');" class="reorder_btn" data-role="none">Delete</a>';
						    str +='</div>';
							str +='</div>';
							str +='</div>';
							str +='</li>';
                    
				}

				str +='</ul>';
			}

			document.getElementById("addr_div_profile").innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function loadUserStores()
{
	'use strict';	
	   $.ajax({
		   url: SERVER+'store_locator_json.asp?city=', 
		   type: 'GET',
		   timeout: 50000,
			dataType: 'json',
			data: { },
			complete: function(xhr, textStatus) {
		 
			},
			success: function(data, textStatus, xhr) {

				//localStorage.setItem('storesjson',JSON.stringify(data));
                var listItems= "";


				if(data.length==0)
				{

					listItems +='<div class="location_input2">';
					listItems +='<img src="assets/images/pick_from_store.png" alt="">';
					listItems +='<h3>';
					listItems +='No Store found';
					listItems +='<span>Please contact custome care</span>';
					listItems +='</h3>';
					listItems +='</div>';
				}
				else
				{
				

				    for (var i = 0; i < data.length; i++)
					{
						if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0  || data[i].storename.indexOf('online')==0 || data[i].storename.indexOf('Facebook')>=0 || data[i].storename.indexOf('Head Office')>=0 || data[i].storename.indexOf('Mobile App')>=0 || data[i].storename.indexOf('MicroSite')>=0 || data[i].storename.indexOf('QR Code')>=0 || data[i].storename.indexOf('ShortCode')>=0)
						continue;

						listItems +='<label class="store_pick_label">'+
							'<input type="radio" data-role="none" name="sel_store">'+
							'<div class="store" onclick="javascript:setselectedstore2(\''+data[i].storecode+'\',\''+data[i].storename+'\',\''+data[i].storeaddress+'\',\''+data[i].storephone+'\',\''+data[i].storelocation+'\');">'+
								'<div class="store_img">'+
									'<img src="assets/images/pick_from_store.png" class="img-responsive" alt="">'+
								'</div>'+
								'<div class="store_add">'+
									'<h4 class="text_secondary">'+data[i].storename+'</h4>'+
									'<p>'+data[i].storeaddress+'</p>';
									'<p><strong>Phone:</strong> '+data[i].storephone+'</p>';
						listItems +='</div>';
						//listItems +='<a class="store_add_link" href="#sel_store_manually">Change</a>';
						listItems +='<a href="javascript:setselectedstore2(\''+data[i].storecode+'\',\''+data[i].storename+'\',\''+data[i].storeaddress+'\',\''+data[i].storephone+'\',\''+data[i].storelocation+'\');" class="bg_primary text_black store_btn">Select Store</a>';
						listItems +='</div>';
						listItems +='</label>';



					 } 

				}
		 
			  $("#stores_div").html(listItems);
			  
			},
			error: function(xhr, textStatus, errorThrown) {
		 
			}
		  });

}

function addnew_address()
{
		
	var fname=$('#address_fname').val();
	var lname=$('#address_lname').val();
	var mobile=$('#address_mobile').val();
	var add1=$('#address_add1').val();
	var add2=$('#address_add2').val();
	var city=$('#address_city').val();
	var pincode=$('#address_pincode').val();
	//var country=$('#address_country').val();
	var state=$('#address_state').val();

	var addnew = add1+','+add2;

	if(fname=='' || lname=='' || mobile=='' || add1=='' || pincode=='' || city=='' || city=='undefined' || city=='0' || city=='null' || city==null || state=='' || state=='undefined' || state=='0' || state=='null' || state==null)
	{
		toast('Please enter all required fields.');
	}
	else if(mobile.startsWith("0")== true)
	{
		toast('Please remove initial 0 from mobile number');
	}
	else
	{

	   $.ajax({
		 url: shopcmsurl+'getcat/adduseraddress/'+fname+'/'+lname+'/'+user.emailid+'/'+encodeURIComponent(addnew)+'/'+city+'/'+state+'/'+pincode+'/'+mobile,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data[0].status=='Address inserted successfully')
				{
					toast('Address added successfully');
				}

				$('#add_address_pop').popup("close");
				//$.mobile.changePage( "#homepage", { transition: "none"} );
				loadUserAddress();
				
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

	}

}

function showeditpopup_address(id,name,address,city,state,postal_code)
{
	$('#address_id_edit').val(id);
	var nm = name.split(" ");
	$('#address_fname_edit').val(nm[0]);
	$('#address_lname_edit').val(nm[1]);
	$('#address_mobile_edit').val(user.mobile);
	$('#address_add1_edit').val(address);
	//$('#address_add2_edit').val();
	$('#address_city_edit').val(city);
	$('#address_pincode_edit').val(postal_code);
	//$('#address_country_edit').val();
	$('#address_state_edit').val(state);


	$("#edit_address_pop").popup();
	$("#edit_address_pop").popup("open");
}

function edit_address()
{
	var addid =$('#address_id_edit').val();

	var fname=$('#address_fname_edit').val();
	var lname=$('#address_lname_edit').val();
	var mobile=$('#address_mobile_edit').val();
	var add1=$('#address_add1_edit').val();
	var add2=$('#address_add2_edit').val();
	var city=$('#address_city_edit').val();
	var pincode=$('#address_pincode_edit').val();
	var state=$('#address_state_edit').val();

	var addnew = add1+','+add2;

	if(fname=='' || lname=='' || mobile=='' || add1=='' || pincode=='' || city=='' || city=='undefined' || city=='0' || city=='null' || city==null || state=='' || state=='undefined' || state=='0' || state=='null' || state==null)
	{
		toast('Please enter all required fields.');
	}
	else if(mobile.startsWith("0")== true)
	{
		toast('Please remove initial 0 from mobile number');
	}
	else
	{

	   $.ajax({
		 url: shopcmsurl+'getcat/edituseraddress/'+addid+'/'+fname+'/'+lname+'/'+user.emailid+'/'+encodeURIComponent(addnew)+'/'+city+'/'+state+'/'+pincode+'/'+mobile,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data[0].status=='Address updated successfully')
				{
					toast('Address updated successfully');
				}
				else
				{
					toast('Error in updating address');
				}

				$("#edit_address_pop").popup("close");

        		loadUserAddress2();
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

	}

}

function delete_address(add_id)
{

	var result = confirm("Are you sure to delete the address ?");

    if(result)
	{
       $.ajax({
		 url: shopcmsurl+'getcat/deluseraddress/'+user.emailid+'/'+add_id,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data[0].status=='Address deleted successfully')
				{
					toast('Address deleted successfully');
				}
				else
				{
					toast('Error in deleting address');
				}

				
				 loadAddress_page();
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
    }
	else
	{
		//toast('address not deleted');
		console.log('address not deleted');
	  
	}
}

function loadAddress_page() {

	
	$.mobile.changePage( "#my_address", { transition: "none"} );

	loadUserAddress2();

}

function showSaved_address()
{

	$.ajax({
		url: shopcmsurl+'getcat/getuseraddress/'+user.emailid, 
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: { },
		complete: function(xhr, textStatus) {
	 
		},
		success: function(data, textStatus, xhr) {

			//localStorage.setItem('storesjson',JSON.stringify(data));
			var str= "";
	
			if(data.length==0)
			{

				str += '<div class="sel_add_block_sign_up" style="margin-bottom: 25px;text-align:left;">'+
						'<div class="sel_add_inner">'+
							'<div class="sel_img">'+
								'<img src="assets/images/map_marker.png" class="img-responsive" alt="">'+
							'</div>'+
							'<div class="sel_add">No Saved address found</div>'+
							'</div>'+
							'<div class="action_btn">'+
							//'<a href="javascript:javascript:setselectedAddress(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="add_edit"><img src="assets/images/right_mark2.png" class="img-responsive" alt=""></a>'+
							//'<a href="javascript:delete_address(\''+data[i].id+'\');" class="add_edit"><img src="assets/images/delete_icon.png" class="img-responsive" alt=""></a>'+
							'</div>'+
							'</div>';
			}
			else
			{
				for (var i = 0; i < data.length; i++)
				{

					str += '<div class="sel_add_block_sign_up" style="margin-bottom: 20px;text-align:left;">'+
						'<div class="sel_add_inner">'+
							'<div class="sel_img">'+
								'<img src="assets/images/map_marker.png" class="img-responsive" alt="">'+
							'</div>'+
							'<div class="sel_add">'+decodeURI(data[i].name)+'<br>'+decodeURI(data[i].address)+'<br>'+decodeURI(data[i].city)+' - '+decodeURI(data[i].postal_code)+'<br>'+decodeURI(data[i].state)+'</div>'+
							'</div>'+
							'<div class="action_btn">'+
							//'<a href="javascript:javascript:setselectedAddress(\''+data[i].id+'\',\''+decodeURI(data[i].name)+'\',\''+decodeURI(data[i].address)+'\',\''+decodeURI(data[i].city)+'\',\''+decodeURI(data[i].state)+'\',\''+decodeURI(data[i].postal_code)+'\');" class="add_edit"><img src="assets/images/right_mark2.png" class="img-responsive" alt=""></a>'+
							//'<a href="javascript:delete_address(\''+data[i].id+'\');" class="add_edit"><img src="assets/images/delete_icon.png" class="img-responsive" alt=""></a>'+
							'</div>'+
							'</div>';

				 }
		  
		    }

			$("#sign_up_addressdiv2").html(str);
		  
		},
		error: function(xhr, textStatus, errorThrown) {
	 
		}
	  });
}

function toggleadressDiv()
{
	  var x = document.getElementById("sign_up_addressdiv2");

	  if (x.style.display === "none") 
	  {
			x.style.display = "block";
			document.getElementById("sign_up_addressdiv").innerHTML='<span class="sadd_signup">Saved Addresses -</span>';
	  } 
	  else
	  {
			x.style.display = "none";
			document.getElementById("sign_up_addressdiv").innerHTML='<span class="sadd_signup">Saved Addresses +</span>';
	  }
}

function updateDelieverysection()
{

  var shipmethod = localStorage.getItem("deliverytypesmarket");


  if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
     user.emailid = '';

  if(shipmethod == 'delivery')
  {

	document.getElementById("p_deliverytype").innerHTML='ORDERED FOR';

	$.ajax({
		url: shopcmsurl+'getcat/getuseraddress/'+user.emailid, 
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: { },
		complete: function(xhr, textStatus) {
	 
		},
		success: function(data, textStatus, xhr) {

			//localStorage.setItem('storesjson',JSON.stringify(data));
			var listItems= "";
	
			if(data.length==0)
			{

				listItems +='<div class="location_input2">';
				listItems +='<img src="assets/images/map_marker2.png" alt="">';
				listItems +='<h3>';
				listItems +='No Adddress found. <br>Add now to proceed';
				//listItems +='<span>Delivery in 45 mins</span>';
				listItems +='</h3>';
				listItems +='<a href="#sel_location_manually">Add</a>';
				listItems +='</div>';
			}
			else
			{
				for (var i = 0; i < 1; i++)
				{

					listItems +='<div class="location_input2">';
					listItems +='<img src="assets/images/map_marker2.png" alt="">';
					listItems +='<h3>';
					listItems +='<span>'+decodeURI(data[i].name)+'<br>'+decodeURI(data[i].address)+'<br>'+decodeURI(data[i].city)+'<br>'+decodeURI(data[i].state)+'</span>';
					//listItems +='<span>Delivery in 45 mins</span>';
					listItems +='</h3>';
					listItems +='<a href="#sel_location_manually">Change</a>';
					listItems +='</div>';



					localStorage.setItem("selectedareasmarket",data[i].id);
					localStorage.setItem("selectedaddresssmarket",data[i].id);
					
					localStorage.setItem('u_name1',decodeURI(data[i].name));
					localStorage.setItem('u_addr1',decodeURI(data[i].address));
					localStorage.setItem('u_addr2','');
					localStorage.setItem('u_city',decodeURI(data[i].city));
					localStorage.setItem('u_state',decodeURI(data[i].state));
					localStorage.setItem('u_pin',decodeURI(data[i].postal_code));

                    //getAddress(decodeURI(data[i].address)+','+decodeURI(data[i].city)+','+decodeURI(data[i].postal_code)+','+decodeURI(data[i].state));

				 }
		  
		    }

			$("#p_deliverydiv").html(listItems);
		  
		},
		error: function(xhr, textStatus, errorThrown) {
	 
		}
	  });

  }
  else if(shipmethod == 'pickup')
  {

		document.getElementById("p_deliverytype").innerHTML='PICK FROM';

        $.ajax({
		   url: SERVER+'store_locator_json.asp?city=', 
		   type: 'GET',
		   timeout: 50000,
			dataType: 'json',
			data: { },
			complete: function(xhr, textStatus) {
		 
			},
			success: function(data, textStatus, xhr) {

				//localStorage.setItem('storesjson',JSON.stringify(data));
				var listItems= "";	

				//for (var i = 0; i < data.length; i++)
					//{
						//if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('ONLINE')==0  || data[i].storename.indexOf('online')==0 || data[i].storename.indexOf('Facebook')>=0 || data[i].storename.indexOf('Head Office')>=0 || data[i].storename.indexOf('Mobile App')>=0 || data[i].storename.indexOf('MicroSite')>=0 || data[i].storename.indexOf('QR Code')>=0 || data[i].storename.indexOf('ShortCode')>=0)
						//continue;

						listItems +='<label class="store_pick_label">'+
							'<input type="radio" data-role="none" name="sel_store">'+
							'<div class="store">'+
								'<div class="store_img">'+
									'<img src="assets/images/pick_from_store.png" class="img-responsive" alt="">'+
								'</div>'+
								'<div class="store_add">'+
									'<h4 class="text_secondary">PICKUP STORE</h4>';
						listItems +='</div>';
						listItems +='<a class="store_add_link" href="#sel_store_manually">Click To Select</a>';
						//listItems +='<a href="javascript:setselectedstore(\''+data[i].storecode+'\',\''+data[i].storename+'\',\''+data[i].storeaddress+'\',\''+data[i].storephone+'\',\''+data[i].storelocation+'\');" class="bg_primary text_black store_btn">Select Store</a>';
						listItems +='</div>';
						listItems +='</label>';

                        
						/*localStorage.setItem("selectedstoresmarket",data[i].storecode);

						localStorage.setItem('u_addr1',data[i].storename);
						localStorage.setItem('u_addr2',data[i].storeaddress);
						localStorage.setItem('u_city',data[i].storelocation);

						localStorage.setItem('u_state','');
						localStorage.setItem('u_pin','');*/



					 //} 
		 
			  $("#p_deliverydiv").html(listItems);
			  
			},
			error: function(xhr, textStatus, errorThrown) {
		 
			}
		  });
  }


}

function setselectedAddress(id,name,address,city,state,pincode)
{
	var listItems='';


				listItems +='<div class="location_input2">';
				listItems +='<img src="assets/images/map_marker2.png" alt="">';
				listItems +='<h3>';
				listItems +='<span>'+name+'<br>'+address+'<br>'+city+'<br>'+state+'</span>';
				//listItems +='<span>Delivery in 45 mins</span>';
				listItems +='</h3>';
				listItems +='<a href="#sel_location_manually">Change</a>';
				listItems +='</div>';

				$("#p_deliverydiv").html(listItems);
				//$.mobile.changePage( "#my_cart", { transition: "none"} );

				toast('Address selected');


	    localStorage.setItem("selectedareasmarket",id);
		localStorage.setItem("selectedaddresssmarket",id);

		//console.log(str);
		localStorage.setItem('u_name1',name);
		localStorage.setItem('u_addr1',address);
        localStorage.setItem('u_addr2','');
 		localStorage.setItem('u_city',city);
 		localStorage.setItem('u_state',state);
 		localStorage.setItem('u_pin',pincode);

		//getAddress(decodeURI(address)+','+decodeURI(city)+','+decodeURI(pincode)+','+decodeURI(state));
}


function setselectedstore2(storecode,storename,storeaddress,mobile,storecity)
{

	localStorage.setItem("selectedstoresmarket",storecode);

     var listItems ='';
	
		listItems +='<label class="store_pick_label">'+
							'<input type="radio" data-role="none" name="sel_store">'+
							'<div class="store">'+
								'<div class="store_img">'+
									'<img src="assets/images/pick_from_store.png" class="img-responsive" alt="">'+
								'</div>'+
								'<div class="store_add">'+
									'<h4 class="text_secondary">'+storename+'</h4>'+
									'<p>'+storeaddress+'</p>';
									'<p><strong>Phone:</strong> '+mobile+'</p>';
						listItems +='</div>';
						listItems +='<a class="store_add_link" href="#sel_store_manually">Change</a>';
						//listItems +='<a href="javascript:setselectedstore(\''+data[i].storecode+'\',\''+data[i].storename+'\',\''+data[i].storeaddress+'\',\''+data[i].storephone+'\',\''+data[i].storelocation+'\');" class="bg_primary text_black store_btn">Select Store</a>';
						listItems +='</div>';
						listItems +='</label>';

						document.getElementById("p_deliverydiv").innerHTML=listItems;
						$.mobile.changePage( "#my_cart", { transition: "none"} );


		//console.log(str);
		localStorage.setItem('u_addr1',storename);
        localStorage.setItem('u_addr2',storeaddress);
 		localStorage.setItem('u_city',storecity);
 		//localStorage.setItem('u_state',storestate);
 		//localStorage.setItem('u_pin',storepinno);

        localStorage.setItem('u_state','');
		localStorage.setItem('u_pin','');

		
	
	
}

function onImgError(source){
        source.src = "assets/images/no_img.png";
        source.onerror = ""; 
        return true; 
    }

function onImgError2(source){
        source.src = "assets/images/No_Image_Available.png";
        source.onerror = ""; 
        return true; 
    } 


$(document).on('pageshow', '#dashboard', function (event, ui) {

         /*document.getElementById("slide1img").src=shopcmsurl+'uploads/offers/p_offer1.jpg';
		 document.getElementById("slide2img").src=shopcmsurl+'uploads/offers/p_offer2.jpg';
		 document.getElementById("slide3img").src=shopcmsurl+'uploads/offers/p_offer3.jpg';*/

         localStorage.setItem('deliverytypesmarket','delivery');
		 addCat_sidebar();
		
});

function applyPromo()
{

  if(typeof localStorage.getItem('discountsmarket') == "undefined" || localStorage.getItem('discountsmarket') == null)
  {

    var promo_disc_code = $('#promo_disc_code').val();

	var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	if(mylist.length==0)
	{
		toast('You have an empty cart');
	}
	else if(promo_disc_code=='')
	{
		toast('Please enter promo code');
	}
	else
	{
		localStorage.setItem('discount_div',parseFloat(p_redeem)*0.25);
		document.getElementById("redcost").innerHTML = '&#2547; '+roundoff(discount);

		var famt = localStorage.getItem('payableamtsmarket');
	
	}

  }
  else
  {
	 toast('You have already applied promo code');
  }

}


function getAddress(address)
{

    console.log(address);
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?',
      type: 'GET',
      timeout: 30000,
        data: {
          address:address,
          key:'AIzaSyCH13Nmq821ivXgHoFfm-LmBS1GQGjhqAE'
        
      },
      success: function(data, textStatus, xhr) {



       // var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support

       console.log(data.results[0].geometry.location.lat);

       console.log(data.results[0].geometry.location.lng);

       currlat=data.results[0].geometry.location.lat;
       currlon=data.results[0].geometry.location.lng;

        drawMap_new(new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng));
    


               
      },
      error: function(xhr, textStatus, errorThrown) {
        toast('Could not connect to Server, make sure you are connected to Internet');
      }
    });

 }

 function drawMap_new(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //console.log('dddddds');
        document.getElementById('mapdiv').style.display='block';
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
 }

function setminDate()
{
	var today = new Date();
	today.setDate(today.getDate() + 1);


	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	var hr = today.getHours();
	var mint = today.getMinutes();

	if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
	if(hr<10){
        hr='0'+hr;
    } 
	if(mint<10){
        mint='0'+mint;
    }

	today = yyyy+'-'+mm+'-'+dd;
	var ctime = hr+':'+mint;

	document.getElementById("cdate").value = today;

	document.getElementById("cdate").setAttribute("min", today);


	/* setting intime to current time */
		//document.getElementById("ctime").value = ctime;
	/* ends*/


}



function addCat_sidebar()
{

	var loc= '0';

	'use strict';	
	   $.ajax({

		 url: shopcmsurl+'getcat/getloccats/'+loc,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
			  //console.log(data);
			 
			  var str2 = '<ul>';

			  for (var i = 0; i < data.length; i++)
			  {

				if(typeof data[i].subcat==undefined || typeof data[i].subcat=="undefined" || data[i].subcat==undefined)
                {
					str2+='<li><a href="#" onclick="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+data[i].gst+'\');" style="font-weight: 700 !important;">'+checkforundefined(data[i].name)+'</a></li>';
				    str2+= '<div id="menuh_side'+data[i].id+'" style="display:none"></div>';

				}
				else
				{
					str2+='<li><a href="#" onclick="javascript:expandeNav(menuh_side'+data[i].id+', this)" style="font-weight: 700 !important;">'+checkforundefined(data[i].name)+'</a></li>';
					str2+= '<div id="menuh_side'+data[i].id+'" style="display:none"></div>';

					addSubcategory_sidebar(data[i].id,data[i].gst);
				}
				
              } 

			  str2+= '</ul>';

			  document.getElementById("menu_items").innerHTML=str2;

                
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

          
}
function expandeNav(el, self){
	$(self).toggleClass("expand");	
	$(el).slideToggle();	
}
function addSubcategory_sidebar(catid,gst)
{
	'use strict';	
	   $.ajax({
		 url: shopcmsurl+'getcat/getcategory/'+catid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));

				
				var str2='<ul class="sub_nav">';
				
				for(var i=0;i<data.length;i++)
				{
				
				   str2 +='<li><a href="javascript:showProducts(\''+data[i].id+'\',\''+data[i].name+'\',\''+gst+'\');">'+checkforundefined(data[i].name)+'</a></li>';
					
				}

				str2 +='</ul>';
				
				document.getElementById("menuh_side"+catid).innerHTML=str2;
        
        
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function searchprodnamebyname(type)
{
	
	//var loc= localStorage.getItem('selectedstoresmarket');
	var loc= '0';


	'use strict';	
     //$('body').addClass('ui-loading');
	//document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';

	document.getElementById("header_title").innerHTML='';
    document.getElementById("header_title").innerHTML= type;
	$.mobile.changePage( "#homepage");

	var mywishlist = JSON.parse(localStorage.getItem("mywishlistitemsmarket"))||[];
	var mycartlist = JSON.parse(localStorage.getItem("shoppingcartitemsmarket"))||[];
    var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
	
	   
				
	var str='';
	//globalcid = cid;
	//globalcname = cname;
	   $.ajax({
		 url: shopcmsurl+'getcat/getitemssearch/'+type,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {

			//console.log('ProductsData:'+JSON.stringify(data));
				
			var str = '<div class="menu_content"><ul>';

			var totlength = data.length;
            //console.log('totlength....'+totlength);

			if(totlength==0)
			{
				str+='<div class="noprdct">No Products Found</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				document.getElementById("menusection").innerHTML=str;
			}
			else
			{
                //console.log('foodtype in products'+type);
				for(var i=0;i<totlength;i++)
				{

					if((data[i].itemname.toLowerCase()).indexOf(type.toLowerCase())>=0)
					{

                    console.log('foodtype in products'+type);

					var sale_price= data[i].sale_price;
					var mrp_regular = data[i].mrp;

					if(sale_price=='' || sale_price==null || sale_price=='null' || sale_price=='undefined' || sale_price=='0')
					{
						//data[i].mrp = data[i].mrp;
					}
					else
					{
					    data[i].mrp = data[i].sale_price;
					}

					var imgurl= data[i].images;
					var imgurlnew = data[i].images;
                    var img_str_json=data[i].images;

					if(imgurlnew=='null' || imgurlnew==null || imgurlnew=='' || imgurlnew=='undefined')
					{
						imgurlnew = 'assets/images/No_Image_Available.png';
					}
					else
					{
					    imgurlnew= data[i].images[0];
					}

					data[i].howtouse = checkforundefined_wt(data[i].keyingredients);

                    if(data[i].colum9 == null)
                    	data[i].colum9='';
                    if(foodtype=='VEG')
                    {
                    	
                   if(data[i].colum9=='green_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+data[i].catid+'\',\''+cname+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{

								
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else if(foodtype=='NON-VEG')
                    {

                    	
                    if(data[i].colum9=='red_dot' || data[i].colum9=='null' || data[i].colum9=='' || data[i].colum9=='0')
                    {
						str +='<li><div class="dish_img">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\' onclick="javascript:showProducts(\''+data[i].catid+'\',\''+cname+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].itemcode+'\')">';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">'+
								'<div class="dish_price">&#2547; '+data[i].mrp+'</div>'+
								'</div><div class="ui-block-b">'+
								'<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';
								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
						}
					}
					else
					{
						//console.log("333");
						str +='<li><div class="dish_img" onclick="javascript:showProductsDetails(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].description+'\',\''+data[i].colum9+'\',\''+data[i].catid+'\')">';
						str +='<img src="'+imgurlnew+'" class="img-responsive" alt="" onerror=\'javascript:onImgError(this);\'>';
						str +='</div>';
						str +='<div class="dis_desc"><h3>'+data[i].itemname+' <span class="meal_type">';
						if(data[i].keyingredients=='spicy')
	                    {
	                       str+='<img src="assets/images/chilli.png">';     
	                    }
						if(data[i].colum9=='Veg')
							str +='<img src="assets/images/veg_sign.png" alt="" />';
						else if(data[i].colum9=='Non Veg')
							str +='<img src="assets/images/non_veg_sign.png" alt="" />';
						str +='</span></h3>';
						/*str +='<div class="customize_check">';
						str +='<label>Half <input type="radio" data-role="none" name="customize_item" checked /></label>';
						str +='<label>Full <input type="radio" data-role="none" name="customize_item" /></label>';
						str +='</div>';*/
						str +='<div class="ui-grid-a"><div class="ui-block-a">';


						if(sale_price=='' || sale_price==null || sale_price=='null' || sale_price=='undefined' || sale_price=='0')
						{
							str +='<div class="dish_price">&#2547; '+data[i].mrp+'</div>';
						}
						else
						{
							str +='<div class="dish_price_mrp">&#2547; '+mrp_regular+'</div>';
							str +='<div class="dish_price">&#2547; '+sale_price+'</div>';
						}

						str +='</div><div class="ui-block-b">';
						str +='<div class="menu_add_option" id="menu_pro'+data[i].itemcode+'">';

								if(mycartlist.indexOf(data[i].itemcode)>=0)
								{
									var j = mycartlist.indexOf(data[i].itemcode);
	                    			mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"));
	                    			var elem = mylist[j].split('|'); 	

									str += '<div class="cart_qty">'+	
										   '<button  onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'sub\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" data-role="none" class="spinner_button removeProduct">-</button>'+
										   '<input name="qty'+data[i].itemcode+'" id="qty'+data[i].itemcode+'" class="quantity" min="0" name="quantity" value="'+elem[4]+'" type="number" data-role="none">'+
										   '<button onclick="javascript:updateshopcart(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+data[i].itemcode+'\',\''+data[i].howtouse+'\',\'add\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="spinner_button" data-role="none">+</button>'+
										   '</div>';
								}
								else
								{
									str += '<div class="cart_qty">'+	
									       '<button onclick="buyfromshop(this,\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].howtouse+'\',\''+imgurlnew+'\',\''+checkforundefined_gst(data[i].gst)+'\',\''+data[i].catid+'\');" class="add_btn">ADD</button><br>'+
									       '</div>';
								}
								str +='</div></div>'+
								'</div></div>'+
								'</li>';
					}
				
				}
				//str +='</div>';
				//document.getElementById("prdctlist").innerHTML=str;
				//console.log("str"+str);
				
			}
				str +='</ul></div>';
				document.getElementById("menusection").innerHTML=str;
			}

		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });


				

				var mylist = JSON.parse(localStorage.getItem("shoppingcartsmarket"))||[];
				
				var items=0;
				for(var i=0;i<mylist.length;i++)
				{
					var elem = mylist[i].split('|');
					items += parseInt(elem[4]);
				}


                $('#noofitems_main').text(items);
				$('#noofitems_prod').text(items);
				$('#noofitems_prod1').text(items);
				$('#noofitems_cart').text(items);
                $('#noofitems_cart1').text(items);
				$('#noofitems_prod_detail').text(items);
}