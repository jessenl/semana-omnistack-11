import React, { useState } from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        console.log(data);
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID é ${response.data.id}`);   
            
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro. Tente novamente');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a econtrarem seus casos </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    value={name} onChange={e => setName(e.target.value)}
                    placeholder="Nome da ONG"/>
                    <input type="email" 
                    value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail" 
                    />
                    <input  
                    value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                    placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city} onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" 
                        value={uf} onChange={e => setUf(e.target.value)}
                        style={{ width: 80 }} /> 
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}