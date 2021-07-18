//melhor usar interface que type alias por ser mais completo

interface Usuario {
	nome: string;
	email: string;
	address?: string;
}

function getUser(): Usuario {
	return {
		nome:'Isa',
		email:'fasds@adsa.com'
	}
}

//interfacer vão ser trabalhadas com as classes por terem umas funções que os types não contemplam
function setUser(usurio:Usuario){   // interface sendo usada como tipo
	//...
} 
