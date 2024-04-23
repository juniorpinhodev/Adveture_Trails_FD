import { useForm } from "react-hook-form";
import {
 ButtonsWrapper,
 DoubleInput,
 FormComponent,
 InputWrapper,
 PageContainer,
 PageTitle
} from "./styles";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// PASSO 1 - Importar o hook useForm e em sequência desestruturar o retorno para utilizar a função register
// PASSO 2 - Registrar os campos incluindo a validação
// PASSO 3 - Criar a função de submissão
// PASSO 4 - Capturar a função handleSubmit do retorno do hook useForm;
// PASSO 5 - Passar o valor da prop onSubmit do form como a handleSubmit e copmo parâmetro da handleSubmit a função personalizada de envio do formulário (nesse caso sendForm);

function PaginaCadastroTrilha() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();
 const { addTrail } = useContext(TrilhasContext);
 const navigate = useNavigate();

 function sendForm(formValue) {
  console.log(formValue);

  addTrail({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });

  navigate("/lista-trilhas");
 }

 function goToHome() {
  navigate("/");
 }

 return (
  <PageContainer>
   <PageTitle>Cadastro de nova trilha</PageTitle>

   <FormComponent>
    {/* Nome da trilha: campo de texto obrigatório com limite de 100 caracteres; */}
    <InputWrapper>
     <label htmlFor="nomeTrilha">Nome da trilha</label>
     <input
      type="text"
      {...register("nomeTrilha", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 100,
        message: "Este campo aceita no máximo 100 caracteres"
       }
      })}
     />
     {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
    </InputWrapper>

    {/* Duração estimada: campo numérico obrigatório */}
    <InputWrapper>
     <label htmlFor="duracao">Duração estimada (em minutos)</label>
     <input
      type="number"
      {...register("duracao", {
       required: "Este campo é obrigatório"
      })}
     />
     {errors?.duracao && <p>{errors.duracao?.message}</p>}
    </InputWrapper>

    {/* Trajeto: campo numérico obrigatório; */}
    <InputWrapper>
     <label htmlFor="trajeto">Trajeto (km)</label>
     <input
      type="number"
      {...register("trajeto", {
       required: "Este campo é obrigatório"
      })}
     />
    </InputWrapper>

    <DoubleInput>
     {/* Cidade: campo de texto obrigatório com limite de 60 caracteres;; */}
     <InputWrapper>
      <label htmlFor="cidade">Cidade</label>
      <input
       type="text"
       {...register("cidade", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 60,
         message: "Este campo aceita no máximo 60 caracteres"
        }
       })}
      />
     </InputWrapper>

     {/* Estado:  campo de texto obrigatório com limite de 2 caracteres; */}
     <InputWrapper>
      <label htmlFor="estado">Estado</label>
      <input
       type="text"
       {...register("estado", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 2,
         message: "Este campo aceita no máximo 2 caracteres"
        }
       })}
      />
     </InputWrapper>
    </DoubleInput>

    {/* Nome completo usuário:  campo de texto; */}
    <InputWrapper>
     <label htmlFor="nomeUsuario">Nome completo do usuário</label>
     <input
      type="text"
      {...register("nomeUsuario", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 60,
        message: "Este campo aceita no máximo 60 caracteres"
       }
      })}
     />
    </InputWrapper>

    <DoubleInput>
     {/* Dificuldade:  campo de select. */}
     <InputWrapper>
      <label htmlFor="dificuldade">Dificuldade</label>
      <select
       {...register("dificuldade", {
        required: "Este campo é obrigatório"
       })}>
       <option value="">Selecione uma dificuldade</option>
       <option value="MuitoFácil">Muito Fácil</option>
       <option value="Fácil">Fácil</option>
       <option value="Moderada">Moderada</option>
       <option value="Difícil">Difícil</option>
       <option value="MuitoDifícil">Muito Difícil</option>
      </select>
     </InputWrapper>

     {/* Tipo de trilha:  campo de select; */}
     <InputWrapper>
      <label htmlFor="tipo">Tipo de trilha</label>
      <select
       {...register("tipo", {
        required: "Este campo é obrigatório"
       })}>
       <option value="">Selecione o tipo da trilha</option>
       <option value="caminhada / trekking">Caminhada/Trekking</option>
       <option value="ciclismo">Ciclismo</option>
      </select>
     </InputWrapper>
    </DoubleInput>

    {/* URL imagem da trilha:  campo de texto; */}
    <InputWrapper>
     <label htmlFor="urlImagem">URL imagem da trilha</label>
     <input
      type="text"
      {...register("urlImagem", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 300,
        message: "Este campo aceita no máximo 60 caracteres"
       }
      })}
     />
    </InputWrapper>

    <ButtonsWrapper>
     <Button variant="contained" type="button" onClick={handleSubmit(sendForm)}>
      Cadastrar
     </Button>

     <Button variant="outlined" type="button" onClick={() => goToHome()}>
      Voltar para a home
     </Button>
    </ButtonsWrapper>
   </FormComponent>

   <video autoPlay muted loop className="video-background">
  <source src="src/assets/cadastroTrilha.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos em HTML5.
</video>

  </PageContainer>
 );
}

export default PaginaCadastroTrilha;