<section class="email">
    <h2>Join the Tissot family</h2>
    <p>Sign up to our newsletter to receive the latest updates and offers.</p>
    <form>
        <input type="email" placeholder="Email address" />
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
        margin: 30px auto;
        max-width: 750px;
        gap: 25px;
    }

    .email input {
        padding: 0 15px;
        flex: 1;
        border: none;
        border-radius: 10px;
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
