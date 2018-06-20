import css from 'styled-jsx/css';
import theme from '../../../theme';

export default css`
    
    main :global(a) {
        color: ${theme.colors.red};
    }

    main :global(.container) {
        color: ${theme.colors.grey};
        line-height: 1.5;
    }

    main > :global(.container) {
         margin: 2em auto
    }

    .rule {
        display: block;
        position: relative;
        height: 10px;
        width: 10px;
        border-radius: 5px;
        margin: 2em auto;
        margin-top: 4em;
        margin-bottom: 4em;
        font-size: 1em;
        border: none;
        background-color: ${theme.colors.red};
    }

    .rule:before, .rule:after {
        display: block;
        position: absolute;
        top: 0;
        content: '';
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.red};
        border-radius: 5px;
    }

    .rule:before {
        left: -20px;
    }

    .rule:after {
        left: 20px;
    } 

    .title {
        color: ${theme.colors.grey};
        padding-bottom: .5rem;
        border-bottom: 2px solid ${theme.colors.red};
    }

    .tick-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .tick-list li {
        width: 100%;
    }

    .tick-list li :global(svg) {
        background-color: #eee;
        fill: green;
        margin-right: .2em;
    }

    @media(min-width: ${theme.breakpoints.md}px) {
        .tick-list li {
            width: 49%;
        }
    }

    @media(min-width: ${theme.breakpoints.lg}px) {
         main {
            padding-top: calc(94px + 2em);
        }
        #home {
            padding-top: 0;
        }
    	aside {
    		padding-top: 94px;
    	}
    }
`;