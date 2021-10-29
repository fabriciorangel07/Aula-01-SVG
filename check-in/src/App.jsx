import React, {useState} from "react";

import './app.css'

export default function App() {
	const [valor, setValor] = useState()

	const voos = {
		BR001: 'Origem: São Paulo >>> Destino: Salvador',
		BR002: 'Origem: Rio de Janeiro >>> Destino: Recife',
		BR003: 'Origem: Manaus >>> Destino: Florianópolis',
		BR004: 'Origem: Barcelona >>> Destino: Guarulhos',
		BR005: 'Origem: Ribeirão Preto >>> Destino: Palmas',
		BR006: 'Origem: Brasilia >>> Destino: Recife',
		BR007: 'Origem: Curitiba  >>> Destino: Santos Dumond',
		BR008: 'Origem: Luxemburgo >>> Destino: São Paulo',
		BR009: 'Origem: Tóquio >>> Destino: Belo Horizonte',
		BR010: 'Origem: Fernando de Noronha >>> Destino: Franca'
	}

	

	return (
		<>
			<div className='checkin'>
				<hgroup>
					<h1>Sistema de check-in</h1>
					<h2>Asas Francanas</h2>
				</hgroup>

				<form>
					<label>Selecione o voo <select onChange={(e) => setValor(e.target.value)}>
						<option value='BR001'>BR001</option>
						<option value='BR002'>BR002</option>
						<option value='BR003'>BR003</option>
						<option value='BR004'>BR004</option>
						<option value='BR005'>BR005</option>
						<option value='BR006'>BR006</option>
						<option value='BR007'>BR007</option>
						<option value='BR008'>BR008</option>
						<option value='BR009'>BR009</option>
						<option value='BR010'>BR010</option>
					</select></label>

					<span>Rota do voo selecionado</span>
					<span><strong>{voos[valor]}</strong></span>

					<button>Salvar check-in</button>

				</form>

				<div className='assentos'>
						<details open='open'>
							<summary>Escolha seu assento</summary>

							<div className='lugares'>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
								<div>ocupado</div>
								<div className='disponivel'>livre</div>
							</div>

						</details>
					</div>

			</div>
		</>
	);
}
