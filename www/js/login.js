document.getElementById('btn-login').onclick = function()
{
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;


	if (login == '' || password == '')
	{
		alert('Login or password is empty.');
	}
	else if (login == 'admin' && password == 'admin')
	{
		localStorage.setItem('login', 'admin');
		document.location = '../html/main.html';
	}
	else
	{
		alert('Wrong login or password, try again.')
	}
}