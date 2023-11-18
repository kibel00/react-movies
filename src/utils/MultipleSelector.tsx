import './MultipleSelector.css'

export default function MultipleSelector(props: multipleSelectorProps) {

    function seletectOption(item: multipleSelectorModel) {
        const selected = [...props.selecteds, item];
        const noSelected = props.noSeletect.filter(value => value !== item);
        props.onChange(selected, noSelected);
    }

    function deSelectOption(item: multipleSelectorModel) {
        const selected = props.selecteds.filter(value => value !== item);
        const noSeletect = [...props.noSeletect, item];
        props.onChange(selected, noSeletect);
    }


    function SeletectAll() {
        const selected = [...props.selecteds, ...props.noSeletect];
        const noSelected: multipleSelectorModel[] = [];
        props.onChange(selected, noSelected);
    }

    function deSeletectAll() {
        const noSelected = [...props.selecteds, ...props.noSeletect];
        const selected: multipleSelectorModel[] = [];
        props.onChange(selected, noSelected);
    }

    return (
        <div className="selector-multiple">
            <ul>
                {props.noSeletect.map(item =>
                    <li key={item.key} onClick={() => seletectOption(item)}>{item.value}</li>
                )}
            </ul>
            <div className="multiple-selector-buttons">
                <button type="button" onClick={SeletectAll}>{'>>'}</button>
                <button type="button" onClick={() => deSeletectAll()}>{'<<'}</button>
            </div>
            <ul>
                {props.selecteds.map(item => <li key={item.key} onClick={() => deSelectOption(item)}>{item.value}</li>)}
            </ul>
        </div>
    )
}


interface multipleSelectorProps {
    selecteds: multipleSelectorModel[];
    noSeletect: multipleSelectorModel[];
    onChange(selecteds: multipleSelectorModel[], noSeletect: multipleSelectorModel[]): void
}


export interface multipleSelectorModel {
    key: number;
    value: string;
}