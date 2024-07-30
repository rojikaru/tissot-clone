<script lang="ts"></script>

<section class="register">
    <div class="description">
        <h2 class="uppercase">Register my watch</h2>
        <p>
            You can now register your Tissot watches into your Tissot account.
            Sign up, add your watch to your collection and enjoy the full Tissot
            Experience. Want to personalize your watch with a compatible strap?
            Want to know about your warranty status? Want to know how to get the
            most of your watch thanks to your user guide? Want to access your
            past order and personal information? All you need is accessible in
            your account.
        </p>
        <a href="#top" class="btn-primary uppercase">Register</a>
    </div>
    <img src="/images/watches.jpg" alt="Tissot watches" />
</section>

<style>
    .register {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        padding: 30px 15px;
    }

    .register h2 {
        color: black;
        font-weight: 400;
        font-size: 25px;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    .register p {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
    }

    .description {
        order: 1;
        margin-top: 30px;
    }

    .uppercase {
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        .register {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 40px 20px;
            gap: 20px;
            margin-top: 60px;
        }

        .register img {
            margin-left: 5px;
        }

        .description {
            order: -1;
            height: fit-content;
            align-self: center;
        }
    }
</style>
