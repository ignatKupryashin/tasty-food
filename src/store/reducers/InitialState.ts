

interface IInitialState {
    data: any[],
    isLoading: boolean,
    error: string
}

/**
 * Класс для стандартного состояния.
 * @T - Модель указанного состояния
 */
export class InitialState<T> implements IInitialState{
    data: T[];
    isLoading: boolean;
    error: string;

    constructor(){
       this.data = [];
       this.isLoading = false;
       this.error = ''
    }
}