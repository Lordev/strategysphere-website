export default async function TestFunction() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return <div> hello</div>;
}
