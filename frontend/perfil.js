const API_URL = 'https://pi-soma-backend.onrender.com';

document.addEventListener('DOMContentLoaded', async () => {
    const token = window.auth.exigirToken();
    if (!token) return;

    const nomeElemento = document.getElementById('nome-usuario');
    const emailElemento = document.getElementById('email-usuario');
    const cursoElemento = document.getElementById('curso-usuario');
    const periodoElemento = document.getElementById('periodo-usuario');
    const funcaoElemento = document.getElementById('funcao-usuario');
    const avatarElemento = document.getElementById('avatar-inicial');
    const tituloDisciplinas = document.getElementById('titulo-disciplinas');
    const ajudaDisciplinas = document.getElementById('ajuda-disciplinas');
    const listaDisciplinas = document.getElementById('lista-disciplinas');
    const selectDisciplina = document.getElementById('disciplina-select');
    const formAdicionar = document.getElementById('form-adicionar-disciplina');
    const botaoAbrirFormulario = document.getElementById('btn-adicionar-disciplina');
    const botaoConfirmar = document.getElementById('btn-confirmar-disciplina');
    const botaoCancelar = document.getElementById('btn-cancelar-disciplina');
    const mensagemElemento = document.getElementById('mensagem-perfil');

    let usuario;
    let disciplinas = [];
    let disciplinasDoUsuario = [];

    function mostrarMensagem(texto, tipo = 'success') {
        mensagemElemento.textContent = texto;
        mensagemElemento.className = `alert alert-${tipo} m-3 mb-0`;
    }

    async function requisitar(caminho, opcoes = {}) {
        const response = await fetch(`${API_URL}${caminho}`, {
            ...opcoes,
            headers: {
                Authorization: `Bearer ${token}`,
                ...(opcoes.headers || {}),
            },
        });

        const texto = await response.text();
        const resultado = texto ? JSON.parse(texto) : null;

        if (response.status === 401) {
            sessionStorage.removeItem('token');
            window.location.href = 'login.html';
            throw new Error('Sessão expirada. Faça login novamente.');
        }

        if (!response.ok) {
            const mensagem = Array.isArray(resultado?.message)
                ? resultado.message.join('\n')
                : resultado?.message;
            throw new Error(mensagem || 'Não foi possível concluir a operação.');
        }

        return resultado;
    }

    function renderizarPerfil() {
        const periodos = {
            Primeiro: '1º período',
            Segundo: '2º período',
            Terceiro: '3º período',
            Quarto: '4º período',
            Quinto: '5º período',
            Sexto: '6º período',
        };
        const ehMonitor = usuario.funcao === 'Monitor';

        nomeElemento.textContent = usuario.nome;
        emailElemento.textContent = usuario.email;
        cursoElemento.textContent = usuario.curso;
        periodoElemento.textContent = periodos[usuario.periodo] || usuario.periodo;
        funcaoElemento.textContent = ehMonitor ? 'Monitor' : 'Aluno';
        avatarElemento.textContent = usuario.nome.trim().charAt(0).toUpperCase();
        tituloDisciplinas.textContent = ehMonitor
            ? 'Disciplinas ofertadas:'
            : 'Disciplinas matriculadas:';
        botaoAbrirFormulario.textContent = ehMonitor
            ? 'Adicionar disciplina ofertada'
            : 'Matricular-se em disciplina';
        ajudaDisciplinas.textContent = ehMonitor
            ? 'Estas disciplinas serão exibidas como disciplinas ofertadas por você.'
            : 'Estas são as disciplinas nas quais você está matriculado.';
    }

    function renderizarDisciplinas() {
        listaDisciplinas.replaceChildren();

        if (disciplinasDoUsuario.length === 0) {
            const vazio = document.createElement('li');
            vazio.className = 'list-group-item text-muted';
            vazio.textContent = 'Nenhuma disciplina adicionada.';
            listaDisciplinas.appendChild(vazio);
        }

        disciplinasDoUsuario.forEach((disciplina) => {
            const item = document.createElement('li');
            item.className = 'list-group-item d-flex justify-content-between align-items-center gap-3';

            const detalhes = document.createElement('span');
            detalhes.textContent = `${disciplina.nome} (${disciplina.codigo})`;

            const botaoRemover = document.createElement('button');
            botaoRemover.type = 'button';
            botaoRemover.className = 'btn btn-outline-danger btn-sm text-nowrap';
            botaoRemover.textContent = 'Remover';
            botaoRemover.setAttribute('aria-label', `Remover ${disciplina.nome}`);
            botaoRemover.addEventListener('click', () => removerDisciplina(disciplina));

            item.append(detalhes, botaoRemover);
            listaDisciplinas.appendChild(item);
        });

        renderizarOpcoes();
    }

    function renderizarOpcoes() {
        const idsAdicionados = new Set(disciplinasDoUsuario.map(({ id }) => id));
        const disponiveis = disciplinas.filter(({ id }) => !idsAdicionados.has(id));
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.textContent = disponiveis.length
            ? 'Selecione uma disciplina'
            : 'Todas as disciplinas já foram adicionadas';

        selectDisciplina.replaceChildren(placeholder);
        disponiveis.forEach((disciplina) => {
            const opcao = document.createElement('option');
            opcao.value = String(disciplina.id);
            opcao.textContent = `${disciplina.nome} (${disciplina.codigo})`;
            selectDisciplina.appendChild(opcao);
        });
        botaoConfirmar.disabled = disponiveis.length === 0;
    }

    async function carregarDados() {
        [usuario, disciplinasDoUsuario, disciplinas] = await Promise.all([
            requisitar('/usuario/me'),
            requisitar('/usuario/me/disciplinas'),
            requisitar('/disciplina'),
        ]);
        renderizarPerfil();
        renderizarDisciplinas();
    }

    async function removerDisciplina(disciplina) {
        if (!window.confirm(`Remover ${disciplina.nome} da sua lista?`)) return;

        try {
            await requisitar(`/usuario/me/disciplinas/${disciplina.id}`, {
                method: 'DELETE',
            });
            disciplinasDoUsuario = disciplinasDoUsuario.filter(
                ({ id }) => id !== disciplina.id,
            );
            renderizarDisciplinas();
            mostrarMensagem('Disciplina removida da sua lista.');
        } catch (error) {
            mostrarMensagem(
                error instanceof Error ? error.message : 'Não foi possível remover a disciplina.',
                'danger',
            );
        }
    }

    botaoAbrirFormulario.addEventListener('click', () => {
        formAdicionar.classList.remove('d-none');
        selectDisciplina.focus();
    });

    botaoCancelar.addEventListener('click', () => {
        formAdicionar.reset();
        formAdicionar.classList.add('d-none');
    });

    formAdicionar.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formAdicionar.reportValidity()) return;

        try {
            const disciplina = await requisitar('/usuario/me/disciplinas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    disciplina_id: Number(selectDisciplina.value),
                }),
            });
            disciplinasDoUsuario.push(disciplina);
            renderizarDisciplinas();
            formAdicionar.reset();
            formAdicionar.classList.add('d-none');
            mostrarMensagem('Disciplina adicionada à sua lista.');
        } catch (error) {
            mostrarMensagem(
                error instanceof Error ? error.message : 'Não foi possível adicionar a disciplina.',
                'danger',
            );
        }
    });

    try {
        await carregarDados();
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
        mostrarMensagem(
            error instanceof Error ? error.message : 'Não foi possível carregar o perfil.',
            'danger',
        );
    }
});
