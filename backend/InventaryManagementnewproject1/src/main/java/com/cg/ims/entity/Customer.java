package com.cg.ims.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

public class Customer {
    private int customerId;
    private String customerName;

    private String firstName;

    private String lastName;
	private String password;
    private String mobileNumber;
    private String email;
  
    
    
    public Customer(int customerId, String customerName, String firstName, String lastName, String password,
 			String mobileNumber, String email) {
 		super();
 		this.customerId = customerId;
 		this.customerName = customerName;
 		this.firstName = firstName;
 		this.lastName = lastName;
 		this.password = password;
 		this.mobileNumber = mobileNumber;
 		this.email = email;
 	}
    

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    
   
    public void setEmail(String email) {
        this.email = email;
    }

	
 
    
}

