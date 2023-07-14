import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

export default function Template({ title, description, image }) {
    return (
        <Card className="mt-6 w-96 rounded-none border-2">
            <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                <img src={image} alt="img-blur-shadow" className="w-full" />
            </CardHeader>
            <CardBody>
                <p className="mb-2 text-lg text-gray-800 font-semibold">
                    {title}
                </p>
                <p>
                    {description}
                </p>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="font-normal rounded-none"><p>View this template</p></Button>
            </CardFooter>
        </Card>
    );
}