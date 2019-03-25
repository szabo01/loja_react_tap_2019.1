import Toolkit from '../util/Toolkit';

function FormataMoeda(props) {
    return 'R$ ' + Toolkit.formataNumero(this.props.valor, 2, 3, '.', ',');
}

export default FormataMoeda;