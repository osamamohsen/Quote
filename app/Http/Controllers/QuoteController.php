<?php

namespace App\Http\Controllers;

use App\Quote;
use Illuminate\Http\Request;



class QuoteController extends Controller
{
    /**
     * Insert an new Quote
     * @param Request $request
     */
    public function postQuote(Request $request){
        $quote = Quote::create($request->all());
        return response()->json(['quote'=>$quote],201);
    }

    /**
     * Get All Quotes
     */
    public function getQuotes(){
        $quotes = Quote::all();
        return response()->json(['quotes'=>$quotes],200);

    }

    /**
     * Update Existing Quote
     * @param Request $request (new Data)
     * @param $id
     */
    public function putQuote(Request $request, $id){
        $quote = Quote::find($id);
        if(!$quote){
            return response()->json(['message' => 'Document not found.'],404);
        }
        $quote->content = $request->get('content');
        $quote->save();
        return response()->json(['message' => 'Document had been updated'],200);
    }

    /**
     * Delete Quote
     * @param $id
     */
    public function deleteQuote($id){
        $quote = Quote::findorfail($id);
        if(!$quote){
            return response()->json(['message' => 'Document not found.'],404);
        }
        $quote->delete();
        return response()->json(['message' => 'Document had been deleted'],200);
    }
}
