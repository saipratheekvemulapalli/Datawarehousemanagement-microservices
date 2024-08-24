package com.cg.ims.service;

import java.util.List;

import com.cg.ims.dto.AdminDTO;
import com.cg.ims.dto.CategoryDto;
import com.cg.ims.dto.ProductDTO;
import com.cg.ims.exception.CategoryException;
import com.cg.ims.exception.ProductException;
import com.cg.ims.exception.UserNotFoundException;

public interface IAdminService {
	public void saveUser(AdminDTO user);
    public AdminDTO getUserByNameAndPassword(String name, String password) throws UserNotFoundException;
    public List<AdminDTO> getAllAdmins() ;
	//public CategoryDto addCategory(CategoryDto category) throws CategoryException;
	//public List<CategoryDto> getAllCategories();
	//public ProductDTO addProduct(ProductDTO product) throws ProductException;
	//public List<ProductDTO> getAllProducts();
	public AdminDTO changePassword(AdminDTO user) throws UserNotFoundException;

}
