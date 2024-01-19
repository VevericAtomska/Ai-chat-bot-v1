from typing import List, Dict, Any, Text
from  rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import json
1

class ActionShowJackets(Action):
    def name(self) -> Text:
        return "action_show_jackets"

    @staticmethod
    def get_all_jackets() -> List[Dict[str, Any]]:
        with open("data/clothes_data.json", "r") as file:
            jackets_data = json.load(file)
        return jackets_data
        pass

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        jackets = self.get_all_jackets()

        for jacket in jackets:
            buttons = [
                {"title": "View Details", "payload": f'/view_details/book-details/{{"clothesId":{jacket["clothesId"]}}}'},
                {"title": "Add to Basket", "payload": f'/add_to_basket/cart/{{"clothesId":{jacket["clothesId"]}}}'},
            ]
            dispatcher.utter_message(
                text=f"Name: {jacket['name']}\n" \
                     f"Price: {jacket['price']} USD\n" \
                     f"Description: {jacket['description']}\n"\
                     f"Brand: {jacket['brand']}\n" \
                     f"Stars: {jacket['stars']}\n"\
                     f"Available Sizes: {', '.join(jacket['size'])}\n",
                buttons=buttons
            )

            #jacket_responses.append(jacket_response)
            # jackets = self.get_all_jackets()
       # dispatcher.utter_message(json_message={"jackets": jackets})
        # dispatcher.utter_message("".join(jacket_responses))
        return []


class ActionShowSweathshirts(Action):
    def name(self) -> Text:
        return "action_show_sweatshirts"

    @staticmethod
    def get_all_sweatshirts() -> List[Dict[str, Any]]:
        with open("data/sweatshirts_data.json", "r") as file:
            sweatshirts_data = json.load(file)
        return sweatshirts_data

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        sweatshirts = self.get_all_sweatshirts()


        for sweatshirt in sweatshirts:
            buttons = [
                {"title": "View Details",
                 "payload": f'/view_details/book-details/{{"clothesId":{sweatshirt["clothesId"]}}}'},
                {"title": "Add to Basket",
                 "payload": f'/add_to_basket/bcart/{{"clothesId":{sweatshirt["clothesId"]}}}'},
            ]
            dispatcher.utter_message(
                text=f"Name: {sweatshirt['name']}\n" \
                     f"Price: {sweatshirt['price']} USD\n" \
                     f"Description: {sweatshirt['description']}\n" \
                     f"Brand: {sweatshirt['brand']}\n" \
                     f"Stars: {sweatshirt['stars']}\n" \
                     f"Available Sizes: {', '.join(sweatshirt['size'])}\n",
                buttons=buttons
            )
        return []


class ActionShowBlazzers(Action):
    def name(self) -> Text:
        return "action_show_blazzers"

    @staticmethod
    def get_all_blazzers() -> List[Dict[str, Any]]:
        with open("data/blazzers_data.json", "r") as file:
            blazzers_data = json.load(file)
        return blazzers_data

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        blazzers = self.get_all_blazzers()


        for blazzer in blazzers:
            buttons = [
                {"title": "View Details",
                 "payload": f'/view_details/book-details/{{"clothesId":{blazzer["clothesId"]}}}'},
                {"title": "Add to Basket",
                 "payload": f'/add_to_basket/cart/{{"clothesId":{blazzer["clothesId"]}}}'},
            ]
            dispatcher.utter_message(
                text=f"Name: {blazzer['name']}\n" \
                     f"Price: {blazzer['price']} USD\n" \
                     f"Description: {blazzer['description']}\n" \
                     f"Brand: {blazzer['brand']}\n" \
                     f"Stars: {blazzer['stars']}\n" \
                     f"Available Sizes: {', '.join(blazzer['size'])}\n",
                buttons=buttons
            )
        return []

class ActionShowShirts(Action):
    def name(self) -> Text:
        return "action_show_shirts"

    @staticmethod
    def get_all_shirts() -> List[Dict[str, Any]]:
        with open("data/shirts_data.json", "r") as file:
            shirts_data = json.load(file)
        return shirts_data

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        shirts = self.get_all_shirts()


        for shirt in shirts:
            buttons = [
                {"title": "View Details",
                 "payload": f'/view_details/book-details/{{"clothesId":{shirt["clothesId"]}}}'},
                {"title": "Add to Basket",
                 "payload": f'/add_to_basket/cart/{{"clothesId":{shirt["clothesId"]}}}'},
            ]
            dispatcher.utter_message(
                text=f"Name: {shirt['name']}\n" \
                     f"Price: {shirt['price']} USD\n" \
                     f"Description: {shirt['description']}\n" \
                     f"Brand: {shirt['brand']}\n" \
                     f"Stars: {shirt['stars']}\n" \
                     f"Available Sizes: {', '.join(shirt['size'])}\n",
                buttons=buttons
            )
        return []


class ActionShowTShirts(Action):
    def name(self) -> Text:
        return "action_show_tshirts"

    @staticmethod
    def get_all_tshirts() -> List[Dict[str, Any]]:
        with open("data/tshirts_data.json", "r") as file:
            tshirts_data = json.load(file)
        return tshirts_data

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        tshirts = self.get_all_tshirts()
        tshirt_responses = []

        for tshirt in tshirts:
            buttons = [
                {"title": "View Details",
                 "payload": f'/view_details/book-details/{{"clothesId":{tshirt["clothesId"]}}}'},
                {"title": "Add to Basket",
                 "payload": f'/add_to_basket/cart/{{"clothesId":{tshirt["clothesId"]}}}'},
            ]
            dispatcher.utter_message(
                text=f"Name: {tshirt['name']}\n" \
                     f"Price: {tshirt['price']} USD\n" \
                     f"Description: {tshirt['description']}\n" \
                     f"Brand: {tshirt['brand']}\n" \
                     f"Stars: {tshirt['stars']}\n" \
                     f"Available Sizes: {', '.join(tshirt['size'])}\n",
                buttons=buttons
            )
        return []