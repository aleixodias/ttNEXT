import Image from 'next/image'

import styles from './styles.module.css'

export default function StepByStep({TitleContent, SubTitleContent}){

  const Steps = [
    {
      "id": 1,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-1.svg",
      "stepContent": "Escolha quantos dias de ingresso vc deseja."
    },
    {
      "id": 2,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-2.svg",
      "stepContent": "Escolha os shows que deseja ir."
    },
    {
      "id": 3,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-3.svg",
      "stepContent": "Escolha qual hotel deseja se hospedar."
    },
    {
      "id": 4,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-4.svg",
      "stepContent": "Selecione quantas noites deseja ficar.",
      "StepContentSmall": "Obs: o numero de pessoas no quarto é a quantidade de ingresso para o evento."
    },
    {
      "id": 5,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-5.svg",
      "stepContent": "Escolha a data do check in."
    },

    {
      "id": 6,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-6.svg",
      "stepContent": "Selecione o quarto para quantas pessoas deseja."
    },
    {
      "id": 7,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-7.svg",
      "stepContent": "Selecione o transfer, pode ser particular ou compartilhado."
    },
    {
      "id": 8,
      "imageStepURL": "https://obj.cdn.theifriend.com/the-town/img-bullet-8.svg",
      "stepContent": "Faça o pagamento e ao final preencha todos os dados pessoais com muita atenção para emissão do voucher e ingresso."
    }
  ]
  return (
    <>
      <div>
      <h1 className={styles.title}>Para garantir seu pacote para o The Town é muito simples:</h1>
      <h2 className={styles.stepByStepTitle}>PASSO A PASSO</h2>
      </div>
      <section className={styles.StepByStepGrid}>

        {Steps.map((item) => {
          return (
            <>
            <div className={styles.stepItem}>
            <Image
                width={80}
                height={80}
                quality={80}
                key={item.id}
                src={item.imageStepURL}
                alt={item.stepContent}
                title={item.stepContent}
                className={`${styles.imageResponsive} ${styles.imageTicket}`}
              />
              <p>{item.stepContent}<br/><small>{item.StepContentSmall && item.StepContentSmall}</small></p>
              </div>
            </>
          )
        })}

      </section>
    </>
  )
}