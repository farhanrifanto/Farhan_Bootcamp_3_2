<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Transaction;
class TransactionController extends Controller
{
    function BookingProcess(Request $req){
        DB::beginTransaction();
            try{
                $this->validate($req,[
                    'customer_id' => 'required',
                    'room_id' => 'required',
                    ]);

                $book = new Transaction;
                $book->customer =  $request->input('customer_id');
                $book->room = $request->input('room_id');
                $book->save();
                DB::commit();
                return response()->json(['message' =>'Succesfull'], 200);
            }
        catch(\Exception $e){
            
            DB::rollback();
            return response()->json(['message' =>'Failed ' + $e], 500);
        }

    }
}
