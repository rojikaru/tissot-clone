<script lang="ts">
    let inputActive = false;
    let text: string;

    const handleFocus = () => {
        console.log(123);
        inputActive = !inputActive || text?.length > 0;
    };
</script>

<section class="email">
    <h2>Join the Tissot family</h2>
    <p>Sign up to our newsletter to receive the latest updates and offers.</p>
    <form>
        <input
            bind:value={text}
            on:focus={handleFocus}
            on:focusout={handleFocus}
            on:input={handleFocus}
            id="email"
            type="email"
        />
        <label class:focused={inputActive} for="email">Email address</label>
        <button type="submit" class="btn-primary">
            <span>Submit</span>
        </button>
    </form>
</section>

<style>
    .email {
        background-color: #4f4f4f;
        text-align: center;
        padding: 15px;
        color: white;
        margin-top: 1px;
    }

    .email h2 {
        font-weight: 400;
        text-align: center;
        font-size: 25px;
        margin: 25px 0 20px;
        text-transform: uppercase;
        line-height: 1.175em;
    }

    .email p {
        text-transform: none;
        margin: 0;
    }

    .email button,
    .email input::placeholder {
        text-transform: uppercase;
    }

    .email form {
        display: flex;
        justify-content: center;

        position: relative;
        margin: 30px auto;
        max-width: 750px;
        gap: 25px;
    }

    .email input {
        padding: 0 15px;
        flex: 1;
        border: none;
        border-radius: 10px;
        transition: all 0.2s ease-in;
        font-size: 16px;
    }

    .email label {
        position: absolute;
        top: 24px;
        left: 15px;
        color: #757575;
        font-size: 16px;
        transform: translateY(-50%);
        padding: 0 5px;
        font-weight: 400;
        text-transform: uppercase;
        z-index: 2;
        transition: all .2s ease-in;
        max-width: calc(100% - 20px);
        cursor: text;
    }

    .email label.focused {
        top: -2px;
        font-size: 10px;
        text-transform: uppercase;
        color: white;
        background: transparent;
        opacity: 1;
        visibility: visible;
    }

    .email button {
        width: auto;
        padding: 17px 30px;
        display: flex;
        align-items: center;
    }

    @media (min-width: 640px) {
        .email button {
            max-width: 18em;
            border-radius: 20px;
        }
    }

    @media (min-width: 1024px) {
        .email h2 {
            font-size: 40px;
        }
    }
</style>
