function sumar(num1: number, num2: number): number {
  return num1 + num2;
}

function restar(num1: number, num2: number): number {
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function dividir(num1: number, num2: number): number {
  if (num2 === 0) {
    throw new Error('No se puede dividir por cero.');
  }
  return num1 / num2;
}

function calcular(operacion: string) {
  const num1Input = document.getElementById('num1') as HTMLInputElement;
  const num2Input = document.getElementById('num2') as HTMLInputElement;
  const resultadoSpan = document.getElementById('resultado')!;

  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoSpan.textContent = 'Ingrese números válidos';
  } else {
    try {
      let resultado: number;
      switch (operacion) {
        case 'sumar':
          resultado = sumar(num1, num2);
          break;
        case 'restar':
          resultado = restar(num1, num2);
          break;
        case 'multiplicar':
          resultado = multiplicar(num1, num2);
          break;
        case 'dividir':
          resultado = dividir(num1, num2);
          break;
        default:
          throw new Error('Operación no válida.');
      }
      resultadoSpan.textContent = resultado.toString();
    } catch (error) {
      if (error instanceof Error) {
        resultadoSpan.textContent = error.message;
      } else {
        resultadoSpan.textContent = 'Ha ocurrido un error.';
      }
    }
  }
}
