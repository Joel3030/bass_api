export class CreateEmployeeDto{
    
	fullName: {
	   name: string;
	   lastName: string;
	};  
	
	 idCard: string;  
	
	contacts: {
	   telephone: string;
	   phone: string;
	   email: string;
	};    
	
	 location: {
	  address: string;
	  sector: string;
	  municipio: string;
	  zipCode: number;
    }; 
    
   
	
}