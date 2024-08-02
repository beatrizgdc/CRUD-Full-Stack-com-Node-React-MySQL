import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 150px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px 50px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #295187;
    color: #fff;
    height: 42px;
    display: flex;
    align-items: center;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;
            user.data_nascimento.value = onEdit.data_nascimento;

        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.fone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn("Preencha todos os campos, por favor.")
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8084/" + onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8084", {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }
        
        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
        user.data_nascimento.value = "";

        setOnEdit(null);
        getUsers();
    };


    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" />
            </InputArea>
            <InputArea>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label htmlFor="fone">Telefone</Label>
                <Input id="fone" name="fone" />
            </InputArea>
            <InputArea>
                <Label htmlFor="data_nascimento">Data de nascimento</Label>
                <Input id="data_nascimento" name="data_nascimento" type="date" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;
