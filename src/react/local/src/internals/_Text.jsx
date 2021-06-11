import React from "react";
import Text from "../../../components/Text/Text";

function _Text() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <Text variant="h1" scheme="primary">
                Heading1 with Primary Color
            </Text>
            <Text variant="h2" scheme="red">
                Heading2 with red Color
            </Text>
            <Text variant="h3" scheme="green">
                Heading3 with green Color
            </Text>
            <Text variant="h4" scheme="yellow">
                Heading4 with yellow Color
            </Text>
            <Text variant="h5" scheme="secondary">
                Heading5 with secondary Color
            </Text>
            <Text variant="h6">Heading6</Text>
            <Text>
                Body1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque
                fugiat earum repellendus. Veritatis cupiditate praesentium magnam vel iste
                deleniti ratione qui autem tempore quaerat quibusdam, dolore, rem ipsam
                molestiae doloremque nostrum eligendi modi accusamus nulla. Eaque
                delectus, exercitationem vel, dignissimos cupiditate maiores dolor porro
                expedita repudiandae sapiente soluta magni!
            </Text>
            <Text variant="body2">
                Body2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque
                fugiat earum repellendus. Veritatis upiditate praesentium magnam vel iste
                deleniti ratione qui autem tempore quaerat quibusdam, dolore, rem ipsam
                molestiae doloremque nostrum eligendi modi accusamus ulla. Eaque delectus,
                exercitationem vel, dignissimos cupiditate maiores dolor porro expedita
                repudiandae sapiente soluta magni!
            </Text>
            <div className="w-52">
                <Text wrap={false}>
                    Without wrap: Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. At cumque fugiat earum repellendus. Veritatis cupiditate
                    praesentium magnam vel iste deleniti ratione qui autem tempore quaerat
                    quibusdam, dolore, rem ipsam molestiae doloremque nostrum eligendi
                    modi accusamus nulla. Eaque delectus, exercitationem vel, dignissimos
                    cupiditate maiores dolor porro expedita repudiandae sapiente soluta
                    magni!
                </Text>
            </div>
            <Text variant="sub1">
                Sub1 text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat reiciendis qui possimus beatae. Veniam voluptatum expedita sapiente
                dolor dolores.
            </Text>
            <Text variant="sub2">
                Sub2 text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat reiciendis qui possimus beatae. Veniam voluptatum expedita sapiente
                dolor dolores.
            </Text>
            <Text align="center">
                Centered: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat reiciendis qui possimus beatae. Veniam voluptatum expedita sapiente
                dolor dolores.
            </Text>
            <Text variant="caption">It's a caption</Text>
            <Text variant="overline">It's a overline</Text>
            <div className="bg-gray-900 dark:bg-white">
                <Text scheme="inverted">Inverted scheme body1</Text>
            </div>
        </div>
    );
}

export default _Text;
