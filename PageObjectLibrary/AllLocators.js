const { test, expect } = require('@playwright/test');

class AllLocators{
    constructor (page){
        this.page = page;

        this.loginUserName= "mohinsuman2024"
        this.loginPwd="mm12345"
        this.loginButton = '//button[normalize-space()="Log in"]'
        this.productStore = "//a[normalize-space()='PRODUCT STORE']";
        this.Home ="//a[normalize-space()='Home (current)']";
        this.Contact="//a[normalize-space()='Contact']";
        this.Aboutus ="//a[normalize-space()='About us']";
        this.Cart="//a[normalize-space()='Cart']";
        this.login="//a[@id='login2']"
        this.logout="//a[normalize-space()='Log out']";
        
        this.Signup="//a[normalize-space()='Sign up']";
        this.Previous="//a[normalize-space()='Previous']";
        this.Next="//a[normalize-space()='Next']";
        this.categories="//a[normalize-space()='CATEGORIES']";
        this.Phones="//a[normalize-space()='Phones']";
        this.Laptops="//a[normalize-space()='Laptops']";
        this.Monitors="//a[normalize-space()='Monitors']";
        
        
        this.Samsunggalaxys6 ="//a[normalize-space()='Samsung galaxy s6']";
        
        
        this.Nokialumia1520="//a[normalize-space()='Nokia lumia 1520']";
        
        
        this.Nexus6="//a[normalize-space()='Nexus 6']";
        
        this.Samsunggalaxys7="//a[normalize-space()='Samsung galaxy s7']";
        
        this.Iphone_6_32gb="//a[normalize-space()='Iphone 6 32gb']";
        
        this.Sony_xperia_z5="//a[normalize-space()='Sony xperia z5']";
        
        this.HTC_One_M9="//a[normalize-space()='HTC One M9']";
        
        
        this.Sony_vaio_i5="//a[normalize-space()='Sony vaio i5']";
        
        
        this.Sony_vaio_i7="//a[normalize-space()='Sony vaio i7']";

        //Product Page locators
        this.productImage ='//div[@class="item active"]//img'
        this.productHeader = '//h2[normalize-space()="Samsung galaxy s6"]'
        this.priceContainer='//h3[@class="price-container"]'
        this.AddtoCartButton= '//a[normalize-space()="Add to cart"]'
        this.AboutUsText ="//a[normalize-space()='We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.']"

        this.Address = "//a[normalize-space()='Address: 2390 El Camino Real']"
    } 

    

}



module.exports = {AllLocators};